import { IAgreement } from 'src/agreement/agreement.interface';
import { ITag } from 'src/tag/tag.interface';

export interface IProject {
  id: number;
  name: string;
  description?: string;
  lifecyclePhase?: string;
  tags?: ITag[];
  agreements?: IAgreement[];
}
