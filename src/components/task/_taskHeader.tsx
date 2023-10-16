import React, {ReactElement} from 'react';
import { Box, Chip, Typography } from '@mui/material';
import PropTypes from 'prop-types'
import format from 'date-fns/format';

import { ITaskHeader } from './interfaces/ITaskHeader';

export const TaskHeader: React.FC<ITaskHeader> = (props): ReactElement => {

  const {date = new Date(), title='Default Title'} = props;

  return (
    <Box
      display='flex'
      width='100%'
      justifyContent='space-between'
      mb={3}
    >
      <Box>
        <Typography variant='h6'>
          {title}
        </Typography>
      </Box>
      <Box>
        <Chip
          variant='outlined'
          label={format(date, 'PPP')}
        />
      </Box>
    </Box>
  );
}

TaskHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
};