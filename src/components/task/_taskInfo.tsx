import React, {ReactElement} from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskInfo } from './interfaces/ITaskInfo';

export const TaskInfo: React.FC<ITaskInfo> = (props): ReactElement => {
  const {info = 'Lorem ipsum dolor sit amet'} = props
  return (
    <Box>
      <Typography>
        {info}
      </Typography>
    </Box>
  )
}

TaskInfo.propTypes = {
  info: PropTypes.string.isRequired,
};