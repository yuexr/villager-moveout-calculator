import React from 'react';
import { Grid } from '@material-ui/core';

import './IslandersContainer.scss'
import ResidentsInputContainer from '../ResidentsInputContainer/ResidentsInputContainer';
import VillagersInputContainer from '../VillagersInputContainer/VillagersInputContainer';

const IslandersContainer = () => (
  <div className="IslandersContainer">
    <h2>Step 1: add island villagers and residents</h2>
    <Grid container>
      <Grid item sm={12} md={6}>
        <VillagersInputContainer />
      </Grid>
      <Grid item sm={12} md={6}>
        <ResidentsInputContainer />
      </Grid>
    </Grid>
  </div>
);

export default IslandersContainer;