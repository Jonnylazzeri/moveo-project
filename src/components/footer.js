import React from 'react';
import { Container, Grid, Box, Link } from '@material-ui/core';

export default function Footer() {
  return (
    <footer>
      <Box
        paddingX={{ xs: 3, sm: 5 }}
        paddingY={{ xs: 5, sm: 7 }}
        bgcolor="#1e212d"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Contact</Box>
              <Box>
                <Link
                  href="https://www.facebook.com/jonathan.naorlazzeri/"
                  target="_blank"
                  color="inherit"
                >
                  Facebook
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://www.linkedin.com/in/jonathan-lazzeri-3b54a01b2/"
                  target="_blank"
                  color="inherit"
                >
                  LinkedIn
                </Link>
              </Box>
              <Box>
                <Link href="mailto:jonnylazzeri94@gmail.com" color="inherit">
                  Email
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Music</Box>
              <Box>
                <Link
                  href="https://open.spotify.com/artist/6fumpaud1U3NupL3xbppw2"
                  target="_blank"
                  color="inherit"
                >
                  Spotify
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://www.youtube.com/channel/UCGkv6xR5t6PCgIycq7Xm_AA"
                  target="_blank"
                  color="inherit"
                >
                  YouTube
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Others</Box>
              <Box>
                <Link
                  href="https://www.youtube.com/watch?v=jJOwdrTA8Gw&t=73s&ab_channel=FilmCow"
                  target="_blank"
                  color="inherit"
                >
                  Llamas with Hats
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://www.youtube.com/watch?v=jjS5UTRE8zY&ab_channel=zenchi"
                  target="_blank"
                  color="inherit"
                >
                  ASDF Movie
                </Link>
              </Box>
              <Box>
                <Link
                  href="https://www.youtube.com/watch?v=DefXS17jZwE&ab_channel=WorldClass"
                  target="_blank"
                  color="inherit"
                >
                  Za Warudo
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            paddingTop={{ xs: 5, sm: 10 }}
            paddingBottom={{ xs: 5, sm: 0 }}
          >
            Jonathan Lazzeri Moveo Project &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
