import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Nav from './Nav'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import './App.css'


class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;