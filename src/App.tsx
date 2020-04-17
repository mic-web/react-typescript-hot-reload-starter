import React from 'react'

import { Box, CssBaseline } from '@material-ui/core'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { cyan } from '@material-ui/core/colors'

import Header from './Header'
import List from './List'

const spacing = 8

const theme = createMuiTheme({
  spacing,
  palette: {
    primary: {
      main: cyan[800],
    },
  },
  overrides: {
    MuiCardActions: {
      root: {
        padding: spacing * 2,
      },
    },
  },
})

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
}))

const App: React.SFC = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Box m={2}>
          <List />
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
