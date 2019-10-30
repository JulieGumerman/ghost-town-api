import React, {useState, useEffect} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import axios from 'axios'

import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Home from './Components/home/home';
import Login from './Components/login/login';

function App() {

  useEffect(() => {
    axios
    .get('http://localhost:8000/api/locations')
    .then(res => {
      console.log(res.data)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login}/>
      <Footer />
    </div>
  );
}

export default App;
