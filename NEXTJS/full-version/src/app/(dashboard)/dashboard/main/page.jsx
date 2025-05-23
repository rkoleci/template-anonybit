'use client';

import { Grid, Typography, Card, CardContent } from '@mui/material';


const DashboardMain = () => {
  return (
    <div title="Dashboard Main" description="Main dashboard page">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            Welcome to Dashboard
          </Typography>
        </Grid>
        
        {/* Sample Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Total Users
              </Typography>
              <Typography variant="h3" color="primary">
                1,234
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Revenue
              </Typography>
              <Typography variant="h3" color="primary">
                $45,678
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Active Projects
              </Typography>
              <Typography variant="h3" color="primary">
                12
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Main Content Area */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Recent Activity
              </Typography>
              <Typography variant="body1">
                This is where you can add your main dashboard content, such as charts, tables, or other widgets.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardMain; 