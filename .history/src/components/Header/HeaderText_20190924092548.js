import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import '../../../src/animista.css'

export default class HeaderText extends React.PureComponent {
  render() {
    return (
        <div >
          <p className="intro_content_t text-focus-in" style={{color:"#00FFEE"}}>
            Currently a freelancer, working on various projects and also helping others to solve their bugs and problems
          </p>
        </div>
    );
  }
}



