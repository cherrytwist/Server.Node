import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { FindOneOptions, Repository } from 'typeorm';
import { EntityNotFoundException } from '@common/exceptions';
import { LogContext } from '@common/enums';
import { ProfileService } from '@domain/community/profile/profile.service';
import { TagsetService } from '@domain/common/tagset/tagset.service';
import { RestrictedGroupNames } from '@domain/community/user-group/user-group.entity';
import { IUserGroup } from '@domain/community/user-group/user-group.interface';
import { UserGroupService } from '@domain/community/user-group/user-group.service';
import { OrganisationInput } from './organisation.dto';
import { Organisation } from './organisation.entity';
import { IOrganisation } from './organisation.interface';

@Injectable()
export class OrganisationService {
  constructor(
    private userGroupService: UserGroupService,
    private tagsetService: TagsetService,
    private profileService: ProfileService,
    @InjectRepository(Organisation)
    private organisationRepository: Repository<Organisation>,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService
  ) {}

  async createOrganisation(name: string): Promise<IOrganisation> {
    // Create and initialise a new organisation using the supplied data
    const organisation = new Organisation(name);
    await this.initialiseMembers(organisation);
    await this.organisationRepository.save(organisation);
    this.logger.verbose?.(
      `Created new organisation with id ${organisation.id}`,
      LogContext.COMMUNITY
    );
    return organisation;
  }

  async initialiseMembers(organisation: IOrganisation): Promise<IOrganisation> {
    if (!organisation.restrictedGroupNames) {
      organisation.restrictedGroupNames = [RestrictedGroupNames.Members];
    }

    if (!organisation.groups) {
      organisation.groups = [];
      // Check that the mandatory groups for a challenge are created
      await this.userGroupService.addMandatoryGroups(
        organisation,
        organisation.restrictedGroupNames
      );
    }

    // Initialise contained singletons
    if (!organisation.profile) {
      organisation.profile = await this.profileService.createProfile();
    }

    return organisation;
  }

  async updateOrganisation(
    orgID: number,
    organisationData: OrganisationInput
  ): Promise<IOrganisation> {
    const existingOrganisation = await this.getOrganisationOrFail(orgID);

    // Merge in the data
    if (organisationData.name) {
      existingOrganisation.name = organisationData.name;
      await this.organisationRepository.save(existingOrganisation);
    }

    // Check the tagsets
    if (organisationData.profileData && existingOrganisation.profile) {
      await this.profileService.updateProfile(
        existingOrganisation.profile.id,
        organisationData.profileData
      );
    }

    // Reload the organisation for returning
    return await this.getOrganisationOrFail(orgID);
  }

  async getOrganisationOrFail(
    organisationID: number,
    options?: FindOneOptions<Organisation>
  ): Promise<IOrganisation> {
    //const t1 = performance.now()
    const organisation = await Organisation.findOne(
      { id: organisationID },
      options
    );
    if (!organisation)
      throw new EntityNotFoundException(
        `Unable to find organisation with ID: ${organisationID}`,
        LogContext.CHALLENGES
      );
    return organisation;
  }

  async getOrganisations(ecoverseId: number): Promise<Organisation[]> {
    const organisations = await this.organisationRepository.find({
      where: { ecoverse: { id: ecoverseId } },
    });
    return organisations || [];
  }

  async createGroup(orgID: number, groupName: string): Promise<IUserGroup> {
    // First find the Challenge
    this.logger.verbose?.(
      `Adding userGroup (${groupName}) to organisation (${orgID})`
    );
    // Try to find the organisation
    const organisation = await this.getOrganisationOrFail(orgID, {
      relations: ['groups'],
    });

    const group = await this.userGroupService.addGroupWithName(
      organisation,
      groupName
    );
    await this.organisationRepository.save(organisation);

    return group;
  }

  async save(organisation: IOrganisation) {
    await this.organisationRepository.save(organisation);
  }
}