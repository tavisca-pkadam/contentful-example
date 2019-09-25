import React from "react";
import { Grid, Typography } from "@material-ui/core";
import NameList from "../components/Content/NameList";
import Banner from "../components/Content/Banner";

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidUpdate() {}

  render() {

    return (
      <div>
        <NameList />
        {this.props.data && <Banner data={this.props.data} />}
      </div>
    );
  }
}
