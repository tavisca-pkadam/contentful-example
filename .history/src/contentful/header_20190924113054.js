


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