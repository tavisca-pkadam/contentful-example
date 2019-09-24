import { createClient, Entry } from 'contentful';

const CONFIG = {
    space: '4blqxwopfmsf',
    accessToken: 'xdSyarHew5UuT_6C1b2CIoUU9Q71NBgiWYhVSU_mJkk',
    contentTypeIds: {
      product: '2PqfXUJwE8qSYKuM0U6w8M'
    }
  }

  export default createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });
  