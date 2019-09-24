import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import HeaderText from '../components/Header/HeaderText'


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

