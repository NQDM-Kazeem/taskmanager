import { ITaskHeader } from './ITaskHeader';
import { ITaskInfo } from './ITaskInfo';
import { ITaskFooter } from './ITaskFooter';

export interface ITask extends ITaskHeader, ITaskInfo, ITaskFooter {
  id?: string;
  priority?: string;
  status?: string;
}
