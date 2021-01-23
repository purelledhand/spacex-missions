import React from 'react';

import { useQuery } from '@apollo/react-hooks';

import getLaunches from 'querys/getLaunches';
import Launch from 'types/Launch';

const Home: React.FC = () => {
  const {
    loading,
    data: { launches },
  } = useQuery(getLaunches);
  const launchItems: Launch[] = launches;

  if (loading) return <p>loading...</p>;

  return (
    <>
      <h1>Rocket Launches</h1>
      {launchItems.map(({ id, mission_name, rocket: { rocket_name } }) => (
        <div key={id}>
          <h2>{mission_name}</h2>
          {rocket_name}
        </div>
      ))}
    </>
  );
};

export default Home;
