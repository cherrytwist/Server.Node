import { ChallengeService } from '@domain/challenge/challenge/challenge.service';
import { EcoverseService } from '@domain/challenge/ecoverse/ecoverse.service';
import { INVP, NVP } from '@domain/common/nvp';
import { OrganisationService } from '@domain/community/organisation/organisation.service';
import { UserService } from '@domain/community/user/user.service';
import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { IMetadata } from './metadata.interface';
import { IServiceMetadata } from './service/service.metadata.interface';

@Injectable()
export class MetadataService {
  constructor(
    private userService: UserService,
    private ecoverseService: EcoverseService,
    private challengeService: ChallengeService,
    private organisationService: OrganisationService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService
  ) {}

  async getMetadata(): Promise<IMetadata> {
    return {
      services: await this.getServicesMetadata(),
      activity: await this.getActivity(),
    };
  }

  async getServicesMetadata(): Promise<IServiceMetadata[]> {
    const ctServerMetadata = await this.getCtServerMetadata();
    const servicesMetadata = [ctServerMetadata];
    return servicesMetadata;
  }

  async getCtServerMetadata(): Promise<IServiceMetadata> {
    return {
      name: 'ct-server',
      version: await this.getVersion(),
    };
  }

  async getVersion(): Promise<string> {
    return process.env.npm_package_version ?? '';
  }

  async getActivity(): Promise<INVP[]> {
    const activity: INVP[] = [];

    // Challenges
    const ecoversesCount = await this.ecoverseService.getEcoverseCount();
    const ecoversesTopic = new NVP('ecoverses', ecoversesCount.toString());
    activity.push(ecoversesTopic);

    const challengesCount = await this.challengeService.getChallengeCount();
    const challengesTopic = new NVP('challenges', challengesCount.toString());
    activity.push(challengesTopic);

    // Users
    const usersCount = await this.userService.getUserCount();
    const usersTopic = new NVP('users', usersCount.toString());
    activity.push(usersTopic);

    // Organisations
    const organisationsCount = await this.organisationService.getOrganisationCount();
    const organisationsTopic = new NVP(
      'organisations',
      organisationsCount.toString()
    );
    activity.push(organisationsTopic);

    return activity;
  }
}
