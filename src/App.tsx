import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { Box, Card, Typography } from '@material-ui/core'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { teal } from '@material-ui/core/colors'
import 'typeface-roboto'

import Header from './Header'

const theme = createMuiTheme({
  overrides: {},
  palette: {
    primary: {
      main: teal[300],
    },
    background: {},
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
          <Card>
            <Box m={2}>
              <Typography variant="subtitle1">
                Simple, modern starter project using Typescript, React and MaterialUI
              </Typography>
            </Box>
          </Card>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App
