import React from 'react';

import { Grid } from '@material-ui/core';

import Link from 'components/Link';
import Launch from 'types/Launch';

import './index.scss';

const Mission: React.FC<Record<'launch', Launch>> = ({
  launch: {
    mission_name,
    rocket: { rocket_name },
    links: { flickr_images, video_link, article_link },
    launch_date_local,
  },
}) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      className="root"
    >
      <img className="image" src={flickr_images[0]} alt={rocket_name} />
      <h2>{mission_name}</h2>
      <Link to={video_link} name="youtube link" />
      <Link to={article_link} name="article link" />
      {launch_date_local.split('T').join(' ')}
    </Grid>
  );
};

export default Mission;
