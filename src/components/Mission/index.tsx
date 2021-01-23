import React from 'react';

import { Grid } from '@material-ui/core';

import Image from 'components/Image';
import Link from 'components/Link';
import MissionTitle from 'components/MissionTitle';
import Launch from 'types/Launch';

import './index.scss';

const Mission: React.FC<Record<'launch', Launch>> = ({
  launch: {
    id,
    mission_name,
    mission_id,
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
      {flickr_images[0] && <Image src={flickr_images[0]} alt={rocket_name} />}
      <MissionTitle missionId={mission_id} launchId={id}>
        {mission_name}
      </MissionTitle>
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
