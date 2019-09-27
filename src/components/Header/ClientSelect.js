import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


export default class ClientSelect extends React.PureComponent {
  render() {
    var usb = this.props.client === "USB Bank" ? "green" : "red" 
    var amex = this.props.client === "USB Bank" ? "red" : "green" 
    return (
        <div style={{padding:"2px"}}>
           <ToggleButtonGroup
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned" style={{backgroundColor:usb, height:"30px", color:"white", fontWeight:"bold"}}>
              US Bank
            </ToggleButton>
            <ToggleButton value="right" aria-label="centered" style={{backgroundColor:amex, height:"30px", color:"white", fontWeight:"bold"}}>
              AmEx Bank   
            </ToggleButton>
            
          </ToggleButtonGroup>
        </div>
    );
  }
}



