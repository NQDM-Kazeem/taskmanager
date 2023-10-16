import React, {ReactElement} from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types'

import { TaskHeader } from './_taskHeader';
import { TaskInfo } from './_taskInfo';
import { TaskFooter } from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from '../createTaskForm/enums/Status';
import { Priority } from '../createTaskForm/enums/Priority';
import { renderPriorityBorderColor } from './utils/helper';

export const Task: React.FC<ITask> = (props): ReactElement => {
  const {
    title = 'Test title',
    date = new Date(),
    info = 'Lorem ipsum dolor sit amet',
    priority = Priority.NORMAL,
    status = Status.COMPLETED,
    onStatusChange = e => console.log(e),
    onClick = e => console.log(e)
  } = props
  return (
      <Box
        display='flex'
        width='100%'
        justifyContent='flex-start'
        flexDirection='column'
        mb={4}
        p={2}
        sx={{
          width: '100%',
          backgroundColor: 'background.paper',
          borderRadius: '8px',
          border: '1px solid',
          borderColor: renderPriorityBorderColor(priority),
        }}
      >
        <TaskHeader title={title}  date={date}/>
        <TaskInfo info={info} />
        <TaskFooter label={status} onClick={onClick} onStatusChange={onStatusChange} />
      </Box>
  )
}

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  info: PropTypes.string,
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
}