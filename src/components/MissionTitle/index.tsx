import React from 'react';

import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './index.scss';

interface Props {
  missionId: string;
  launchId: string;
}

const Mission: React.FC<Props> = ({ missionId, launchId, children }) => {
  return (
    <Grid item>
      <Link to={`/detail/${missionId}&${launchId}`} className="title">
        <h2>{children}</h2>
      </Link>
    </Grid>
  );
};

export default Mission;
