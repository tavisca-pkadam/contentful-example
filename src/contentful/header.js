import Client from "./main"

export default async function getHeaderData(){

    var responseData;

    responseData = await Client.getEntries({
        content_type: "header",
           // locale: (this.locale == "de-DE" ? "en-US" :  "de-DE")
           locale:"en-US"
          })
          .then((response) => {      
            console.log(response)
            responseData = response.items;
            // return response.items;
            responseData  = Object.create(response.items)
          })
    return responseData;
}