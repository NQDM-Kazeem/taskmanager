import React, {ReactElement} from 'react';
import { Avatar, Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createTaskForm/enums/Status';
import { emitCorrectBorderColor, emitCorrectStatusLabel } from './utils/helpers';

export const TaskCounter: React.FC<ITaskCounter> = (props): ReactElement => {

  const {count = 0, status = Status.COMPLETED} = props

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: emitCorrectBorderColor(status),
          }}
        >
          <Typography color='white' variant='h4'>{count}</Typography>
        </Avatar>
        <Typography color='white' fontSize='20px' fontWeight='bold' variant='h5'>{emitCorrectStatusLabel(status)}</Typography>
      </Box>
    </>
  );
};

TaskCounter.propTypes = {
  count: PropTypes.number.isRequired,
  status: PropTypes.oneOf([Status.TODO, Status.IN_PROGRESS, Status.COMPLETED])
}