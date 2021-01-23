import { gql } from 'apollo-boost';

const GET_MISSION = gql`
  query Mission($missionId: ID!, $launchId: ID!) {
    mission(id: $missionId) {
      website
      id
      name
      description
      wikipedia
      twitter
      payloads {
        orbit
        customers
      }
      manufacturers
    }
    launch(id: $launchId) {
      details
      links {
        flickr_images
      }
    }
  }
`;

export default GET_MISSION;
