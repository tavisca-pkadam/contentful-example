import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import NameList from '../components/Content/NameList'
import Banner from '../components/Content/Banner'


export default class Header extends React.PureComponent {

  constructor(props){
    super(props)
    console.log(props)
  }

  render() {
    console.log(this.props)

    return (
        <div >
           <NameList/>
            <Banner/>
        </div>
    );
  }
}

