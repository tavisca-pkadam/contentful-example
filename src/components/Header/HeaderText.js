import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { createClient, Entry } from "contentful";

export default class HeaderText extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("Inside Header Text");
  }

  render() {
    return (
      <div style={{ float: "left", paddingLeft: "7%" }}>
        <link
          rel="stylesheet"
          type="text/css"
          href={this.props.data.fields.css.fields.cssFile.fields.file.url}
        />
        <Typography variant="h1" component="h2">
          {this.props.data.fields.header.fields.headerTitle}
        </Typography>
      </div>
    );
  }
}
