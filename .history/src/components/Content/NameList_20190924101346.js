import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export default class NameList extends React.PureComponent {
    render() {
      return (
          <div >
             <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
         
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
         
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
          </div>
      );
    }
  }