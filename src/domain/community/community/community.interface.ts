import { IApplication } from '@domain/community/application';
import { IUserGroup } from '@domain/community/user-group';

export interface ICommunity {
  id: number;
  name: string;
  groups?: IUserGroup[];
  restrictedGroupNames: string[];
  applications?: IApplication[];
  parentCommunity?: ICommunity;
  type: string;
}
