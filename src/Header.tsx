import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import { BeachAccess, WbSunny } from '@material-ui/icons'

export default function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box mr={1}>
          <WbSunny />
          <BeachAccess />
        </Box>
        <Typography variant="h5">Customizable, Transparent Starter Kit</Typography>
      </Toolbar>
    </AppBar>
  )
}
