import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import HeaderText from '../components/Header/HeaderText'
import Logo from '../components/Header/Logo'
import Locale from  '../components/Header/Locale'
import getHeaderData '../contentful/header'
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

