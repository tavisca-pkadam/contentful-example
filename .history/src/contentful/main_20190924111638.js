[Yesterday 5:23 PM] Kadam, Paresh
    
  
  
  
    
      
      
        TypeScript
      
    
    
    
      import React, { Component } from 'react'
import { createClient, Entry } from 'contentful';
// k7g4tn7yWcIcYK_AGfHEAEgRNl4_a-DS1K96M_cbuiY  preview 
// rPaGo8Xrc0WCwXccw_V-EUqilXnwYlJfy1bmxRCvk8g master
// DGn6NHL8Hime06CzUllhLz_Xw89NSoLNClEfhBcROew
const CONFIG = {
  space: '4blqxwopfmsf',
  accessToken: 'xdSyarHew5UuT_6C1b2CIoUU9Q71NBgiWYhVSU_mJkk',
  contentTypeIds: {
    product: '2PqfXUJwE8qSYKuM0U6w8M'
  }
}
const client = createClient({
  space: CONFIG.space,
  accessToken: 'xdSyarHew5UuT_6C1b2CIoUU9Q71NBgiWYhVSU_mJkk',
})
export class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      header: ""
    };
    this.locale = "en-US";
    this.getHeader = this.getHeader.bind(this);
  }
  getHeader() {
    console.log("header")
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
  }
    render() {
      this.getHeader();
      return <div>
        <div className="header">{this.state.header}</div>
        <div onClick={() => {this.getHeader()}}>CLick</div>
      </div>;
    }
  }
    
    
  
  

<https://teams.microsoft.com/l/message/19:c9073c9edcbe4aa6970b267dda3b72a7@thread.skype/1569239620377?tenantId=be80116c-1704-4639-8c7f-77ded4343d23&amp;groupId=3ddf1a84-9df7-498a-a3f4-adc5612dc9cc&amp;parentMessageId=1569239620377&amp;teamName=NoobMasters Batch-1&amp;channelName=General&amp;createdTime=1569239620377>

const CONFIG = {
    space: '4blqxwopfmsf',
    accessToken: 'xdSyarHew5UuT_6C1b2CIoUU9Q71NBgiWYhVSU_mJkk',
    contentTypeIds: {
      product: '2PqfXUJwE8qSYKuM0U6w8M'
    }
  }