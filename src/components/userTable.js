import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
  TableSortLabel,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 400,
  },
  tableContainer: {
    borderRadius: 15,
    margin: '6rem 2rem',
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'rgba(234, 191, 159, 1)',
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  tableRow: {
    '&:hover': {
      backgroundColor: 'lightgray',
      opacity: 1,
      transition: '.6s',
    },
    cursor: 'pointer',
  },
  avatar: {
    marginRight: '1rem',
  },
  name: {
    fontWeight: 'bold',
    marginTop: '.5rem',
    color: 'black',
  },
  email: {
    color: 'black',
  },
  gender: {
    textTransform: 'capitalize',
  },
}));

function UserTable({ users }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const USERS = [];

  users.forEach((user) => {
    USERS.push({
      age: user.dob.age,
      name: `${user.name.first[0]}. ${user.name.last}`,
      pictureThumb: user.picture.thumbnail,
      email: user.email,
      username: user.login.username,
      gender: user.gender,
    });
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSortRequest = (cellId) => {
    const isAsc = orderBy === cellId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(cellId);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const usersAfterPagingAndSorting = () => {
    return stableSort(USERS, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  };

  const headerCells = [
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email' },
    { id: 'gender', label: 'Gender' },
    { id: 'age', label: 'Age' },
  ];

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headerCells.map((headerCell) => {
              return (
                <TableCell
                  sortDirection={orderBy === headerCell.id ? order : false}
                  className={classes.tableHeaderCell}
                  style={{ color: 'black' }}
                >
                  <TableSortLabel
                    active={orderBy === headerCell.id}
                    direction={orderBy === headerCell.id ? order : 'asc'}
                    onClick={() => handleSortRequest(headerCell.id)}
                  >
                    {headerCell.label}
                  </TableSortLabel>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {usersAfterPagingAndSorting().map((row) => (
            <TableRow key={`${row.name}`} className={classes.tableRow}>
              <TableCell>
                <Grid
                  container
                  component={Link}
                  style={{ textDecoration: 'none' }}
                  to={`/users/${row.username}`}
                >
                  <Grid item lg={2}>
                    <Avatar
                      alt={`${row.name}`}
                      src={row.pictureThumb}
                      className={classes.avatar}
                    />
                  </Grid>
                  <Grid item lg={10}>
                    <Typography className={classes.name}>{row.name}</Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Typography color="primary" variant="subtitle2">
                  <a className={classes.email} href={`mailto:${row.email}`}>
                    {row.email}
                  </a>
                </Typography>
              </TableCell>
              <TableCell className={classes.gender}>{row.gender}</TableCell>
              <TableCell>
                <Typography>{parseInt(row.age)}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 7, 10]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
