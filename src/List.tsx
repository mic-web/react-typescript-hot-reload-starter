import React from 'react'

import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core'

const List: React.SFC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Today
            </Typography>
            <Typography variant="h5" component="h2">
              Used languages and frameworks
            </Typography>
            <Box mt={2}>
              <Typography variant="subtitle1">Typescript, React, MaterialUI, Jest, Enzyme.</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Today
            </Typography>
            <Typography variant="h5" component="h2">
              Used tools
            </Typography>
            <Box mt={2}>
              <Typography variant="subtitle1">
                Webpack, Babel, Prettier, ESLint, Hot Module Replacement (HMR).
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Today
            </Typography>
            <Typography variant="h5" component="h2">
              The purpose
            </Typography>
            <Box mt={2}>
              <Typography variant="subtitle1">
                This project shall serve as a simple starter project which provides full customizability. It&apos;s an
                alternative to bootstrappers like the &quot;create-react-app&quot;, if you desire more flexibility and
                transparency.
                <br />
                The setup is minimal and completely customizable, but still includes everything you need to get really
                productive quickly.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default List
