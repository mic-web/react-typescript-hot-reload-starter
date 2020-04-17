import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import { BeachAccess, Pool, WbSunny } from '@material-ui/icons'

export default function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box mr={1}>
          <WbSunny />
          <BeachAccess />
          <Pool />
        </Box>
        <Typography variant="h6">Highly Customizable React Project</Typography>
      </Toolbar>
    </AppBar>
  )
}
