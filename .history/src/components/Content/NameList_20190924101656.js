import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InboxIcon from '@material-ui/icons/Inbox';


export default class NameList extends React.PureComponent {
    render() {
      return (
          <div >
             <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
          
        </ListItem>
      </List>
          </div>
      );
    }
  }