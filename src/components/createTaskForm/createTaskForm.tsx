import React, { ReactElement, useEffect, useState } from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import { useMutation } from 'react-query';

import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import { ICreateTask } from '../taskArea/interfaces/ICreateTask';
import { taskApiRequest } from '../../services/tasks';

export const CreateTaskForm: React.FC = (): ReactElement => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [taskData, setTaskData] = useState<ICreateTask>({
    date: new Date(),
    description: '',
    title: '',
    priority: Priority.NORMAL,
    status: Status.TODO,
  });

  const handleTaskData = (
    inputIdentifier: string,
    enteredValue: string | unknown,
  ) => {
    setTaskData((currInput) => {
      return { ...currInput, [inputIdentifier]: enteredValue };
    });
  };

  const createTaskMutation = useMutation((data: ICreateTask) =>
    taskApiRequest('http://localhost:3200/tasks', 'POST', data),
  );

  function createTaskHandler() {
    if (!taskData.title || !taskData.date || !taskData.description) {
      return;
    }

    createTaskMutation.mutate(taskData);
  }

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowAlert(true);
    }

    const showAlertTimeout = setTimeout(() => {
      setShowAlert(false);
    }, 7000);

    return () => {
      clearTimeout(showAlertTimeout);
    };
  }, [createTaskMutation.isSuccess]);

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'flex-start'}
      width={'100%'}
      px={4}
      my={4}
    >
      {showAlert && (
        <Alert severity="success" sx={{ width: '100%', marginBottom: '16px' }}>
          <AlertTitle>Success</AlertTitle>
          Task created successfully
        </Alert>
      )}
      <Typography mb={2} component={'h2'} variant="h6">
        Create A Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField
          disabled={createTaskMutation.isLoading}
          onChange={(e) => {
            handleTaskData('title', e.target.value);
          }}
        />
        <TaskDescriptionField
          disabled={createTaskMutation.isLoading}
          onChange={(e) => handleTaskData('description', e.target.value)}
        />
        <TaskDateField
          disabled={createTaskMutation.isLoading}
          onChange={(date) => handleTaskData('date', date)}
          value={taskData.date}
        />
        <Stack direction={'row'} sx={{ width: '100%' }} spacing={2}>
          <TaskSelectField
            disabled={createTaskMutation.isLoading}
            onChange={(e) => handleTaskData('status', e.target.value as string)}
            label="Status"
            name="status"
            value={taskData.status}
            items={[
              {
                value: Status.TODO,
                label: Status.TODO.toUpperCase(),
              },
              {
                value: Status.IN_PROGRESS,
                label: Status.IN_PROGRESS.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            disabled={createTaskMutation.isLoading}
            onChange={(e) =>
              handleTaskData('priority', e.target.value as string)
            }
            label="Priority"
            name="priority"
            value={taskData.priority}
            items={[
              {
                value: Priority.LOW,
                label: Priority.LOW.toUpperCase(),
              },
              {
                value: Priority.NORMAL,
                label: Priority.NORMAL.toUpperCase(),
              },
              {
                value: Priority.HIGH,
                label: Priority.HIGH.toUpperCase(),
              },
            ]}
          />
        </Stack>
        {createTaskMutation.isLoading && <LinearProgress />}
        <Button
          disabled={
            !taskData.title ||
            !taskData.date ||
            !taskData.description ||
            !taskData.status ||
            !taskData.priority
          }
          onClick={createTaskHandler}
          variant="contained"
          size="large"
          fullWidth
        >
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};
