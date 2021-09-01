
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light')

  const changeTheme = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#0d1623'
    }

    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }

  }

  return (
    <>
      <Router>
        <Navbar title="TextConverter" mode={mode} changeTheme={changeTheme} />
        <div className="container my-3 ">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <TextForm heading="Enter Text for UpperCase and lowerCase" mode={mode} />
            </Route>
          </Switch>

        </div>


      </Router>

    </>
  );
}

export default App;
