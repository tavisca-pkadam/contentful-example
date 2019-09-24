import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import HeaderText from './components/HeaderText'
import Logo from './components/Logo'
import Locale from './components/Locale'

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



<