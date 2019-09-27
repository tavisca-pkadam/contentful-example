import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./template/Header";
import Content from "./template/Content";
import Locale from "./components/Header/Locale";
import ClientSelect from "./components/Header/ClientSelect";
import Client from "./contentful/main";

type Props = {
  children: React.Node,
  locale: "en-US",
  data: Object
};

export default class App extends React.PureComponent<Props> {
  props: Props;
  constructor() {
    super();
    this.state = {
      data: "",
      locale: "en-US",
      client: "USB Bank"
    };
    this.getData = this.getData.bind(this);
    this.handleLocale = this.handleLocale.bind(this);
  }

  componentWillMount() {
    this.getData();

    // <link href={this.props.data} rel="stylesheet" />;
  }

  handleLocale() {
    if (this.state.locale === "en-US") {
      this.setState({
        locale: "fr-FR"
      },()=>{
        this.getData();
      });
      
    } else {
      this.setState({
        locale: "en-US"
      },() => {
        this.getData();

      });
    }
  }

  handleClient() {
    if (this.state.client === "USB Bank") {
      this.setState({
        client: "American Express Bank"
      }, () => {
        this.getData();
      });
    } else {
      this.setState({
        client: "USB Bank"
      }, ()=> {
        this.getData();
      });
    }
  }

  async getData() {
    await Client.getEntries({
      content_type: "webpage",
      locale: this.state.locale,
      "fields.webpageName": this.state.client
    }).then(response => {
      this.setState({
        data: JSON.parse(JSON.stringify(response.items[0]))
      });
    });
  }
  render() {
    // var fields = this.state.data.fields;

    return (
      <div className="App">
        <center>
          <div
            onClick={() => {
              this.handleLocale();
            }}
          >
            <Locale locale={this.state.locale}/>
          </div>
          <div
            onClick={() => {
              this.handleClient();
            }}
          >
            <ClientSelect client={this.state.client}/>
          </div>
        </center>
        <Header data={this.state.data} />
        <Content data={this.state.data} />
      </div>
    );
  }
}
