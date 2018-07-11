import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Grid, Typography, createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import Nav from './Nav'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e5ffff',
      main: '#b2ebf2',
      dark: '#81b9bf',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffff6b',
      main: '#fcd734',
      dark: '#c5a600',
      contrastText: '#000',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        color: 'black',
        '&:hover': {
          backgroundColor: '#fcd734'
        }
      }
    }
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container >
          <Router basename={process.env.PUBLIC_URL}>
            <div>
              <Nav />
              <div className='App'>
                <About />
                <Skills />
                <Projects />
                <Contact />
              </div>
            </div>
          </Router>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;