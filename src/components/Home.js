import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useFetch } from '../useFetch';
import { makeStyles } from '@material-ui/core/styles';
import HeaderSection from '../sections/headerSection';
import HeroSection from '../sections/heroSection';
import UserTable from './userTable';

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#fff',
    },
  },
  segmentContainer: {
    backgroundImage: `linear-gradient(
      rgba(30, 33, 45, 0.801),
      rgba(182, 137, 115, 0.801)
    ),
    url('https://images.unsplash.com/photo-1593349480506-8433634cdcbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '6rem 0 4rem 0',
  },
}));

export default function Home() {
  const { loading, data } = useFetch();
  const classes = useStyles();

  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <Container className={classes.segmentContainer} maxWidth>
        <Grid container spacing={4} justify="center">
          <UserTable users={data} loading={loading} />
        </Grid>
      </Container>
    </div>
  );
}
