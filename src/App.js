import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './template/Header'
import Content from './template/Content'
import Locale from './components/Header/Locale'
import Client from './contentful/main'

type Props = {
  children: React.Node,
  locale: "en-US",
  data: Object
};

export default class App extends React.Component<Props> {
  props: Props;
  constructor(){
    super()
    this.state = {
      data: ""
    }
    this.getData = this.getData.bind(this)
  }
  

  componentWillMount(){
    this.getData();
  }


   async getData() {
     await Client.getEntries({
        content_type: "webpage",
       // locale: (this.locale == "de-DE" ? "en-US" :  "de-DE")
       locale: "en-US",
       "fields.webpageName": "USB Bank"
      })
      .then((response) => {      
        //console.log(response)
        this.setState({
            data: response.items[0]
        })
      })        
      console.log(this.state.data)
}
  render() {
    console.log(this.state.data)
    return  <div className="App" >
      <Locale/>
    <Header data={this.state.data}/>
    <Content data={this.state.data}/>
   </div>;
  }
}
