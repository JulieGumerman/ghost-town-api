import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Home from './Components/home/home';
import Login from './Components/login/login';
import Map from './Components/map-overview/map-overview'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import AddLocation from './Components/addLocation/addLocation';

function App() {


  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login}/>
      <ProtectedRoute exact path='/map-overview' component={Map}/>
      <ProtectedRoute exact path='/add-location' component={AddLocation} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
