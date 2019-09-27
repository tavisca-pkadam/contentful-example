import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);
export default class NameList extends React.PureComponent {
    render() {
      return (
          <div >
             <Table >
        <TableHead >
          <StyledTableRow>
            <StyledTableCell  align="left">First Name</StyledTableCell>
            <StyledTableCell align="left">Last Name</StyledTableCell>
            <StyledTableCell align="left">Mobile Number</StyledTableCell>
        
          </StyledTableRow>
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
           <StyledTableRow key="1">
              <StyledTableCell align="left">Paresh</StyledTableCell>
              <StyledTableCell align="left">Kadam</StyledTableCell>
              <StyledTableCell align="left">8308074046</StyledTableCell>
            </StyledTableRow>
           <StyledTableRow key="2">
              <StyledTableCell align="left">Nillesh</StyledTableCell>
              <StyledTableCell align="left">Rajpurohit</StyledTableCell>
              <StyledTableCell align="left">8308074046</StyledTableCell>
            </StyledTableRow>
           <StyledTableRow key="3">
              <StyledTableCell align="left">Chinmay</StyledTableCell>
              <StyledTableCell align="left">Padole</StyledTableCell>
              <StyledTableCell align="left">8308074046</StyledTableCell>
            </StyledTableRow>
           <StyledTableRow key="4">
              <StyledTableCell align="left">Shravan</StyledTableCell>
              <StyledTableCell align="left">Ramdurg</StyledTableCell>
              <StyledTableCell align="left">8308074046</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
          </div>
      );
    }
  }