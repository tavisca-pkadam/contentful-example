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

export default class App extends React.PureComponent<Props> {
  props: Props;
  constructor(){
    super()
    this.state = {
      data: "",
      locale: "en-US"
    }
    this.getData = this.getData.bind(this)
    this.handleLocale = this.handleLocale.bind(this)
  }
  

  componentWillMount(){
    this.getData();
  }

  handleLocale() {
    console.log("handleLocale")
    if(this.state.locale === "fr-FR"){
      this.setState({
        locale: "en-US"
      })
      this.getData();
    } else {
      
      this.setState({
        locale: "fr-FR"
      })
      this.getData();
    }
    
  }

   async getData() {
     await Client.getEntries({
        content_type: "webpage",
       // locale: (this.locale == "de-DE" ? "en-US" :  "de-DE")
       locale: this.state.locale,
       "fields.webpageName": "USB Bank"
      })
      .then((response) => {      
        console.log(response)
        this.setState({
            data: JSON.parse(JSON.stringify(response.items[0]))
        })
      })        
}
  render() {
    // var fields = this.state.data.fields;

    console.log()
    return  <div className="App" >
      <div onClick={ () => {this.handleLocale()}}>
      <Locale/>
        </div>
    {/* <Header headerName={this.state.data.fields} /> */}
  {this.state.data.fields && this.state.data.fields.header.fields && <Content data={this.state.data.fields.header.fields}/> }
   </div>;
  }
}
