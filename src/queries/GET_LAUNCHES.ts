import { gql } from 'apollo-boost';

const GET_LAUNCHES = gql`
  {
    launches {
      id
      rocket {
        rocket_name
        rocket_type
      }
      mission_id
      mission_name
      launch_date_local
      links {
        video_link
        article_link
        flickr_images
      }
    }
  }
`;

export default GET_LAUNCHES;
