import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { createClient, Entry } from "contentful";
import Paper from "@material-ui/core/Paper";

export default class HeaderText extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("Inside Header Text");
  }

  render() {
    //var widget = require(this.props.data.fields.widget.fields.widgetCodeFile.fields.file.url)
    var data =  this.props.data.fields.widget.fields.widgetCode.content[0].content[0].value
    console.log(data);
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
        <div>
          <center>
          <Paper
          style={{
              width: "40%",
              marginTop: "30px",
              marginBottom: "50px",
             
            }}>

        <div dangerouslySetInnerHTML={ {__html: data}} />
        </Paper>
            </center>
          </div>
      </div>
    );
  }
}
