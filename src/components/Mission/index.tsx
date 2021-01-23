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
      {flickr_images[0] && (
        <img className="image" src={flickr_images[0]} alt={rocket_name} />
      )}
      <h2 className="title">{mission_name}</h2>
      <div className="description">
        {rocket_name}
        <br />
        launched at&nbsp;
        {launch_date_local.split('T').join(' ')}
      </div>
      <Link to={video_link} name="youtube link" />
      <Link to={article_link} name="article link" />
    </Grid>
  );
};

export default Mission;
