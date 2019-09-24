import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import NameList from '../components/Content/Nam'


export default class Header extends React.PureComponent {
  render() {
    return (
        <div >
           <Logo/>
           <HeaderText/>
            <Locale/>
        </div>
    );
  }
}

