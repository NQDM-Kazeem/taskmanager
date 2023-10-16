import { IDisabled } from './IDisabled';
import { SelectChangeEvent } from '@mui/material';

interface ISelectItems {
  value: string;
  label: string;
}

export interface ISelectField extends IDisabled {
  onChange?: (e: SelectChangeEvent) => void;
  label?: string;
  name?: string;
  value?: string;
  items?: ISelectItems[];
}
