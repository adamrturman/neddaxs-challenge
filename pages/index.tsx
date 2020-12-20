import React from 'react';
import Link from 'next/link';

// Material UI
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// Components
import Section from 'components/Sections/Section';
import Layout from 'components/Layout/Layout';

export default function Index() {
  return (
    <Layout>
      <Section id="home">
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12}>
            <Box fontSize="1.4rem">Welcome to the home page</Box>
            <Link href="/users">View all users</Link>
          </Grid>
        </Grid>
      </Section>
    </Layout>
  );
}
