import React, {ReactElement} from 'react';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import PropTypes from 'prop-types'

import { ITaskFooter } from './interfaces/ITaskFooter';

export const TaskFooter: React.FC<ITaskFooter> = (props): ReactElement => {
  const {
    label = 'Completed',
    onClick = e => console.log(e),
    onStatusChange = e => console.log(e)
  } = props
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      mt={4}
    >
      <FormControlLabel
        label={label}
        control={<Switch color='warning' onChange={(e) => onStatusChange(e)} />}
      />
      <Button
        variant='contained'
        color='success'
        size='small'
        sx={{
          color:'white'
        }}
        onClick={(e) => onClick(e)}
      >
        Mark as Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
}