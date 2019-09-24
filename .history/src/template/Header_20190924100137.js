import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Logo from './components/HeaderText'
import Logo from './components/Logo'
import Locale from './components/Locale'

export default class HeaderText extends React.PureComponent {
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