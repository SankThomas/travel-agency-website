import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Login from './components/Login.js'
import SignUp from './components/SignUp'

function App() {
  return (
    <Router>
      <Header />

      <Route exact path='/'>
        <Showcase />
        <Destinations />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Footer />
    </Router>
  )
}

export default App
