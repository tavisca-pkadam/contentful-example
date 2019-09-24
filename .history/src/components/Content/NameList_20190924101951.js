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
             <Table >
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Mobile Number</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
           <TableRow key="1">
              <TableCell align="right">Paresh</TableCell>
              <TableCell align="right">Kadam</TableCell>
              <TableCell align="right">8308074046</TableCell>
            </TableRow>
           <TableRow key="2">
              <TableCell align="right">Paresh</TableCell>
              <TableCell align="right">Kadam</TableCell>
              <TableCell align="right">8308074046</TableCell>
            </TableRow>
           <TableRow key="3">
              <TableCell align="right">Paresh</TableCell>
              <TableCell align="right">Kadam</TableCell>
              <TableCell align="right">8308074046</TableCell>
            </TableRow>
           <TableRow key="4">
              <TableCell align="right">Paresh</TableCell>
              <TableCell align="right">Kadam</TableCell>
              <TableCell align="right">8308074046</TableCell>
            </TableRow>
        </TableBody>
      </Table>
          </div>
      );
    }
  }