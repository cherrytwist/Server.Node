import { IOrganisation } from '@domain/community/organisation/organisation.interface';
import { Field, InterfaceType } from '@nestjs/graphql';
import { IUser } from '@domain/community/user/user.interface';
import { IUserGroup } from '@domain/community/user-group/user-group.interface';
import { UUID } from '@domain/common/scalars';

@InterfaceType('Searchable', {
  resolveType(searchable) {
    if (searchable.groups) {
      return IOrganisation;
    }
    if (searchable.email) {
      return IUser;
    }
    return IUserGroup;
  },
})
export abstract class ISearchable {
  @Field(() => UUID, {
    nullable: false,
  })
  id!: string;
}
