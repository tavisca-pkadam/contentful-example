import React from "react";
import { Grid, Typography } from "@material-ui/core";
import HeaderText from "../components/Header/HeaderText";
import Logo from "../components/Header/Logo";
import Locale from "../components/Header/Locale";
import getHeaderData from "../contentful/header";
import Client from "../contentful/main";

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("Inside Header");
  }

  render() {
    return (
      <div>
        {this.props.data && <Logo data={this.props.data} />}
        {this.props.data && <HeaderText data={this.props.data} />}
      </div>
    );
  }
}
