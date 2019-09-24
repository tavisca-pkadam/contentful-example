import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export default class NameList extends React.PureComponent {
    render() {
      return (
          <div >
             <Table >
        <TableHead>
          <TableRow>
            <TableCell  align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Mobile Number</TableCell>
        
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
              <TableCell align="left">Paresh</TableCell>
              <TableCell align="left">Kadam</TableCell>
              <TableCell align="left">8308074046</TableCell>
            </TableRow>
           <TableRow key="2">
              <TableCell align="left">Nilesh</TableCell>
              <TableCell align="left">Rajpurohit</TableCell>
              <TableCell align="left">8308074046</TableCell>
            </TableRow>
           <TableRow key="3">
              <TableCell align="left">Chinmay</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">8308074046</TableCell>
            </TableRow>
           <TableRow key="4">
              <TableCell align="left">Shravan</TableCell>
              <TableCell align="left">Rambrug</TableCell>
              <TableCell align="left">8308074046</TableCell>
            </TableRow>
        </TableBody>
      </Table>
          </div>
      );
    }
  }