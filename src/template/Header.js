import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import HeaderText from '../components/Header/HeaderText';
import Logo from '../components/Header/Logo';
import Locale from  '../components/Header/Locale';
import getHeaderData from '../contentful/header';
import Client from "../contentful/main"

export default class Header extends React.PureComponent {

    consturctor(){
        this.super()
        this.state = {
            data: "",
            logo: "",
            headerText:"",
            locale:"en-US",
        }
        this.getData = this.getData.bind(this)
        
    }

    
    


  render() {
    return (
        <div >
           <Logo />
           <HeaderText/>
        </div>
    );
  }
}

