import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  ActorGroup,
  IActorGroup,
  CreateActorGroupInput,
  DeleteActorGroupInput,
} from '@domain/context/actor-group';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ActorService } from '@domain/context/actor/actor.service';
import {
  EntityNotFoundException,
  GroupNotInitializedException,
} from '@common/exceptions';
import { LogContext } from '@common/enums';
import { CreateActorInput, IActor } from '@domain/context/actor';

@Injectable()
export class ActorGroupService {
  constructor(
    private actorService: ActorService,
    @InjectRepository(ActorGroup)
    private actorGroupRepository: Repository<ActorGroup>,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService
  ) {}

  async createActorGroup(
    actorGroupData: CreateActorGroupInput
  ): Promise<IActorGroup> {
    const actorGroup = ActorGroup.create(actorGroupData);
    actorGroup.actors = [];
    return await this.actorGroupRepository.save(actorGroup);
  }

  async deleteActorGroup(
    deleteData: DeleteActorGroupInput
  ): Promise<IActorGroup> {
    const actorGroupID = deleteData.ID;
    const actorGroup = await this.getActorGroupOrFail(actorGroupID);
    if (actorGroup.actors) {
      for (const actor of actorGroup.actors) {
        await this.actorService.deleteActor({ ID: actor.id.toString() });
      }
    }
    const result = await this.actorGroupRepository.remove(
      actorGroup as ActorGroup
    );
    result.id = actorGroupID;
    return result;
  }

  async getActorGroupOrFail(actorGroupID: string): Promise<IActorGroup> {
    const actorGroup = await this.actorGroupRepository.findOne({
      id: actorGroupID,
    });
    if (!actorGroup)
      throw new EntityNotFoundException(
        `Not able to locate actorGroup with the specified ID: ${actorGroupID}`,
        LogContext.CHALLENGES
      );
    return actorGroup;
  }

  async createActor(actorData: CreateActorInput): Promise<IActor> {
    const actorGroup = await this.getActorGroupOrFail(actorData.parentID);

    const actor = await this.actorService.createActor(actorData);
    if (!actorGroup.actors)
      throw new GroupNotInitializedException(
        `Non-initialised ActorGroup: ${actorData.parentID}`,
        LogContext.CHALLENGES
      );
    actorGroup.actors.push(actor);

    await this.actorGroupRepository.save(actorGroup);

    return actor;
  }
}
