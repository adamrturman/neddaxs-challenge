import React from 'react';
import { useTheme, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Logo from 'components/Logo/Logo';
import Link from 'next/link';

export default function Navbar() {
  const theme: Theme = useTheme();
  const mobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar>
      <Toolbar>
        <Grid container justify="space-between">
          {mobile ? (
            <Grid item container alignItems="center" justify="space-between">
              <Grid item container xs={11} sm={11} alignItems="center">
                <Grid item xs={5} sm={4}>
                  <Box pr={2}>
                    <Grid container alignItems="center">
                      <Logo size={20} />
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Grid item>
              <Box p={2}>
                <Grid container alignItems="center">
                  <Logo size={24} />
                </Grid>
              </Box>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
