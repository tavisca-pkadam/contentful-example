import Paper from "@material-ui/core/Paper";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class Banner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.VisibilityCheck = this.visibilityCheck.bind(this)
  }

  componentDidUpdate() {
    // console.log(this.props.data.fields.banner);
  }

visibilityCheck() {
   
    return this.props.data.fields.banner.fields.isVisible
      ? "visible"
      : "hidden";

  }

  render() {
    return (
      <div style={{marginTop:"10%"}}>
        <center>
          <Paper
            style={{
              width: "40%",
              marginTop: "30px",
              marginBottom: "50px",
              visibility: this.visibilityCheck()
            }}
          >
            <img
              width="30%"
              height="10%"
              src={this.props.data.fields.banner.fields.image.fields.file.url}
              style={{ float: "left" }}
            />

            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {this.props.data.fields.banner.fields.title}
              </Typography>

              {/* <Typography color="textSecondary">adjective</Typography> */}
              <Typography variant="body2" component="p">
                <br />
                {
                  this.props.data.fields.banner.fields.description.content[0]
                    .content[0].value
                }
              </Typography>
            </CardContent>
          </Paper>
        </center>
      </div>
    );
  }
}
