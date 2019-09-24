import createClient from "./main"

export default function getHeaderData(){

    var client = createClient();
    var responseData = "";

    client.getEntries({
        content_type: "header",
           // locale: (this.locale == "de-DE" ? "en-US" :  "de-DE")
           locale:"en-US"
          })
          .then((response) => {      
            // console.log(response.items[0].fields.heading);
            responseData = response;
          })
    return responseData;
}