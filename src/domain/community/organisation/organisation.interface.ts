import { IChallenge } from '@domain/challenge/challenge/challenge.interface';
import { IProfile } from '@domain/community/profile/profile.interface';
import { IUserGroup } from '@domain/community/user-group/user-group.interface';
import { ObjectType } from '@nestjs/graphql';
import { ISearchable } from '@domain/common/interfaces/searchable.interface';
import { IGroupable } from '@domain/common/interfaces/groupable.interface';
import { INameable } from '@domain/common/nameable-entity';
import { IAgent } from '@domain/agent/agent/agent.interface';
@ObjectType('Organisation', {
  implements: () => [IGroupable, ISearchable],
})
export abstract class IOrganisation extends INameable {
  profile?: IProfile;
  challenges?: IChallenge[];
  groups?: IUserGroup[];
  agent?: IAgent;
}
