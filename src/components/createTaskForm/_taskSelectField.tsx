import React, {ReactElement} from 'react';
import {InputLabel, FormControl, MenuItem, Select} from '@mui/material'
import PropTypes from 'prop-types'

import { ISelectField } from './interfaces/_ISelectField';

export const TaskSelectField: React.FC<ISelectField> = (props): ReactElement => {
  const {
    value = '', label = 'Select Box', items = [{value: '', label: 'Add Items'}],
    onChange = (e) => console.log(e) ,
    name = 'Select Box',
    disabled=false
  } = props;
  return (
   <FormControl fullWidth size='small'>
    <InputLabel id={`${name}-id`}>{label}</InputLabel>
    <Select
      disabled={disabled}
      onChange={onChange}
      labelId={`${name}-id`}
      id={`${name}-id-select`}
      value={value}
      label={label}
      name={name}
    >
      {items.map((item, index) => (
        <MenuItem key={item?.value + index} value={item.value}>
          {item?.label}
        </MenuItem>
      ))}
    </Select>
   </FormControl>
  );
}

TaskSelectField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired
  ),
}