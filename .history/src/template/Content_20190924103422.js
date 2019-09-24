import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import NameList from '../components/Content/NameList'
import NameList from '../components/Content/NameList'


export default class Header extends React.PureComponent {
  render() {
    return (
        <div >
           <NameList/>
            <Banner/>
        </div>
    );
  }
}

