import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom'

import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Components/home'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={Home} />
      <Footer />
    </div>
  );
}

export default App;
