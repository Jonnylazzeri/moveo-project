import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MediaCard from './mediaCard';
import MyMap from './userMap';

const useStyles = makeStyles({
  header: {
    color: '#fff',
    fontSize: '6rem',
    backgroundImage: `linear-gradient(rgba(182, 137, 115, 0.801), rgba(30, 33, 45, 0.801)),url("https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
    height: '60rem',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    alignItems: 'center',
  },
});

export default function UserPage({ users }) {
  const classes = useStyles();
  const [knowMore, setKnowMore] = useState(false);

  const { username } = useParams();

  useEffect(() => {
    document.title = 'User Info';
  }, []);

  const user = users.filter((currUser) => currUser.login.username === username);
  const lat = user[0].location.coordinates.latitude;
  const lng = user[0].location.coordinates.longitude;
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        className={classes.header}
      >
        <MediaCard setKnowMore={setKnowMore} knowMore={knowMore} user={user} />

        <div>
          {knowMore ? (
            <Grid>
              <MyMap lat={lat} lng={lng} />
            </Grid>
          ) : null}
        </div>
      </Grid>
    </div>
  );
}
