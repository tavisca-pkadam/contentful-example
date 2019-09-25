import React from "react";
import { Grid, Typography } from "@material-ui/core";

export default class Logo extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("Inside Logo");
  }

  render() {
    return (
      <div style={{ float: "left" }}>
        <img width="60%"
          src={this.props.data.fields.header.fields.logoImage.fields.file.url}
        />
      </div>
    );
  }
}
