import React, {ReactElement} from 'react'
import { Grid } from '@mui/material';

import { TaskBar } from '../../components/taskArea/taskArea';
import { Sidebar } from '../../components/sidebar/sidebar';

const DashBoard: React.FC = (): ReactElement => {
  return (
    <Grid container minHeight='100vh' p={0} m={0}>
      <TaskBar />
      <Sidebar />
    </Grid>
  );
};

export default DashBoard;

