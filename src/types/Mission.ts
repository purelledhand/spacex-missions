interface Mission {
  id: string;
  name: string;
  description: string;
  website: string;
  wikipedia: string;
  twitter: string;
  payloads: Payload[];
  manufacturers: string[];
}

interface Payload {
  orbit: string;
  customers: string[];
}

interface Link {
  flickr_images: string[];
}

interface Launch {
  details: string;
  links: Link;
}

interface MissionData {
  mission: Mission;
  launch: Launch;
}

export default MissionData;
