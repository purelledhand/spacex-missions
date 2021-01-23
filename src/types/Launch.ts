export interface Rocket {
  rocket_name: string;
  rocket_type: string;
}

export interface Link {
  video_link: string;
  article_link: string;
  flickr_images: string[];
}

interface Launch {
  id: string;
  rocket: Rocket;
  mission_name: string;
  launch_date_local: string;
  links: Link;
}

export default Launch;
