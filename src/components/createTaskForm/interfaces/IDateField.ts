import { IDisabled } from './IDisabled';

export interface IDateField extends IDisabled {
  onChange?: (date: Date | null) => void;
  value?: Date | null;
}
