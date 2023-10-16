import React, {ReactElement} from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types'

import { ITextField } from './interfaces/ITextField';

export const TaskDescriptionField: React.FC<ITextField> = (props): ReactElement => {
  const {disabled = false, onChange = (e) => console.log(e)} = props

  return (
    <TextField
    id='description'
    name='description'
    label='Description'
    placeholder='Description'
    variant='outlined'
    size='small'
    multiline
    rows={4}
    fullWidth
    onChange={onChange}
    disabled={disabled}
    />
  )
}

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}