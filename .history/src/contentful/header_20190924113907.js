import Client from "./main"

export default function getHeaderData(){

    var client = createClient();
    var responseData = "";

    client.getEntries({
        content_type: "header",
           // locale: (this.locale == "de-DE" ? "en-US" :  "de-DE")
           locale:"en-US"
          })
          .then((response) => {      
            console.log(response);
            responseData = response;
          })
    return responseData;
}