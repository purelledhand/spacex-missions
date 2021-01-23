import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import Image from 'components/Image';
import Link from 'components/Link';
import GET_MISSION from 'queries/GET_MISSION';
import MissionData from 'types/Mission';

interface Params {
  missionId: string;
  launchId: string;
}

const Detail: React.FC = () => {
  const { missionId, launchId } = useParams<Params>();
  const { loading, data, error } = useQuery(GET_MISSION, {
    variables: {
      missionId,
      launchId,
    },
  });

  if (loading) return <p>loading...</p>;

  const missionItem: MissionData = data;
  const {
    launch: { details, links },
    mission: { name, description, manufacturers, website, wikipedia, twitter },
  } = missionItem;

  if (error) return <p>{error}</p>;
  return (
    <Grid container wrap="nowrap" justify="space-between" direction="column">
      <h2>{name}</h2>
      <Grid container alignItems="center">
        {links?.flickr_images?.map((imageSrc) => (
          <Image
            key={`${imageSrc}`}
            squareRatio
            src={imageSrc}
            alt={imageSrc}
          />
        ))}
      </Grid>

      <h3>Mission details</h3>
      <p>{description}</p>

      <h3>Launch details</h3>
      <p>{details}</p>
      <p>
        manufacturers:&nbsp;
        {manufacturers?.join(' ')}
      </p>
      <Link to={website} name="website" />
      <Link to={wikipedia} name="wikipedia" />
      <Link to={twitter} name="twitter" />
    </Grid>
  );
};

export default Detail;
