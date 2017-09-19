import React from 'react';
import {Switch, Route} from 'react-router-dom';
// Routes
import Landing from './components/Landing/Landing';
import Shop from './components/Shop/Shop';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';

export default (
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/shop' component={Shop}/>
    <Route path='/details/:name' component={Details}/>
    <Route path='/cart' component={Cart}/>
  </Switch>
);
