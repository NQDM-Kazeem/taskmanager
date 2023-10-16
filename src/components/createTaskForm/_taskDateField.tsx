import React, {ReactElement} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import PropTypes from 'prop-types'

import { IDateField } from './interfaces/IDateField';

export const TaskDateField: React.FC<IDateField> = (props): ReactElement => {
  const {onChange = (date) => console.log(date), disabled=false, value = new Date()} = props

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          disabled={disabled}
          onChange={onChange}
          value={value}
          format='dd/MM/yyyy'
          label='Task Date'
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
}