import { createClient, Entry } from 'contentful';

const CONFIG = {
    space: 'qz55ogwu91ch',
    accessToken: 'DJEVYeK0ZdZYoe9A3hiwMGtUn7WA6zu_Wuqb8N6z6v8',
    contentTypeIds: {
      header: 'header'
    }
  }

  export default createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });
  