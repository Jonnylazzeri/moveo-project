import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  header: {
    color: '#fff',
    fontSize: '6rem',
    backgroundImage: `linear-gradient(rgba(182, 137, 115, 0.801), rgba(30, 33, 45, 0.801)),url("https://www.ie.edu/exponential-learning/blog/wp-content/uploads/2018/01/MachineLearninginMarketing-1621x1000.jpg")`,
    height: '45rem',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    letterSpacing: '1.2rem',
    fontFamily: `'BenchNine', sans-serif`,
    fontWeight: '400',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem',
    },
  },
}));

export default function HeaderSection() {
  const classes = useStyles();

  return (
    <div>
      <Box justifyContent="center" display="flex" className={classes.header}>
        ALL USERS
      </Box>
    </div>
  );
}
