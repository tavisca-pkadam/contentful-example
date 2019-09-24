import { createClient, Entry } from 'contentful';

const CONFIG = {
    space: '4blqxwopfmsf',
    accessToken: 'xdSyarHew5UuT_6C1b2CIoUU9Q71NBgiWYhVSU_mJkk',
    contentTypeIds: {
      product: '2PqfXUJwE8qSYKuM0U6w8M'
    }
  }

  export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
  });
  
client.getEntries({
    content_type: "header",
   // locale: (this.locale == "de-DE" ? "en-US" :  "de-DE")
   locale:"en-US"
  })
  .then((response) => {      
    // console.log(response.items[0].fields.heading);
    this.setState({
      header: response.items[0].fields.heading
    })
  })