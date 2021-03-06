import { IOrganisation } from '@domain/community/organisation/organisation.interface';
import { IUserGroup } from '@domain/community/user-group/user-group.interface';
import { Field, InterfaceType } from '@nestjs/graphql';
import { ICommunity } from '@domain/community/community/community.interface';

@InterfaceType('Groupable', {
  resolveType(groupable) {
    if (groupable.profile) {
      return IOrganisation;
    }
    return ICommunity;
  },
})
export abstract class IGroupable {
  @Field(() => [IUserGroup], {
    nullable: true,
    description: 'The groups contained by this entity.',
  })
  groups?: IUserGroup[];
}
