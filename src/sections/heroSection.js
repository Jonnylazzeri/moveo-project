import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import StarsIcon from '@material-ui/icons/Stars';
import StorageIcon from '@material-ui/icons/Storage';

const useStyles = makeStyles((theme) => ({
  hero: {
    color: '#fff',
    fontSize: '1.4rem',
    backgroundColor: 'rgba(250, 243, 224)',
    height: '37rem',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontFamily: `'BenchNine', sans-serif`,
    fontWeight: '400',
    marginTop: '-7rem',
    zIndex: '-1',
    [theme.breakpoints.down('md')]: {
      height: '45rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '50rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '66rem',
    },
  },
  floatingBox: {
    backgroundColor: 'rgba(234, 191, 159, .8)',
    height: '100%',
    width: '100%',
    textAlign: 'center',
    marginTop: '4rem',
  },
  icons: {
    fontSize: '2rem',
    paddingTop: '1.2rem',
  },
  ipsum: {
    padding: '0 1rem 1rem 1rem',
  },
}));

export default function HeroSection() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.hero}>
        <Grid container spacing={4} justify="center">
          <Grid item xl={2} lg={3} md={3} sm={6}>
            <Box justifyContent="center">
              <Paper className={classes.floatingBox}>
                <AccessAlarmIcon className={classes.icons} fontSize="inherit" />
                <p className={classes.ipsum}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium numquam laborum hic. Aspernatur, cupiditate
                  reprehenderit?
                </p>
              </Paper>
            </Box>
          </Grid>
          <Grid item xl={2} lg={3} md={3} sm={6}>
            <Box justifyContent="center">
              <Paper className={classes.floatingBox}>
                <StarsIcon className={classes.icons} fontSize="inherit" />
                <p className={classes.ipsum}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium numquam laborum hic. Aspernatur, cupiditate
                  reprehenderit?
                </p>
              </Paper>
            </Box>
          </Grid>
          <Grid item xl={2} lg={3} md={3} sm={6}>
            <Box justifyContent="center">
              <Paper className={classes.floatingBox}>
                <StorageIcon className={classes.icons} fontSize="inherit" />
                <p className={classes.ipsum}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium numquam laborum hic. Aspernatur, cupiditate
                  reprehenderit?
                </p>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
