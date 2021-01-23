import React from 'react';

import { Grid } from '@material-ui/core';

import './index.scss';

interface Props {
  to: string;
  name: string;
}

const Mission: React.FC<Props> = ({ to, name }) => {
  return (
    <Grid item>
      <a href={to} target="_blank" rel="noopener noreferrer" className="link">
        {name}
      </a>
    </Grid>
  );
};

export default Mission;
