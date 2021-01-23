import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { Grid } from '@material-ui/core';

import Mission from 'components/Mission';
import GET_LAUNCHES from 'queries/GET_LAUNCHES';
import Launch from 'types/Launch';

const Home: React.FC = () => {
  const { loading, data } = useQuery(GET_LAUNCHES);
  if (loading) return <p>loading...</p>;

  const launchItems: Launch[] = data?.launches ?? [];

  return (
    <>
      <h1>SpaceX - Rocket Launches</h1>
      <Grid container>
        {launchItems.map((launch) => (
          <Mission key={launch.id} launch={launch} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
