import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { Grid } from '@material-ui/core';

import Mission from 'components/Mission';
import getLaunches from 'querys/getLaunches';
import Launch from 'types/Launch';

const Home: React.FC = () => {
  const { loading, data } = useQuery(getLaunches);
  const launchItems: Launch[] = data?.launches ?? [];

  if (loading) return <p>loading...</p>;

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
