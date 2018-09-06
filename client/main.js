import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {BrowserRouter, Route,Switch, Link } from 'react-router-dom';
import IndecisionApp from '../imports/IndecisionApp';
import NewCustomerRegistration from '../imports/NewCustomerRegistration';
import ConfigureRestaurant from '../imports/ConfigureRestaurant';
import CreateMenu from '../imports/CreateMenu';
import POSView from '../imports/POSView';

//import {square,squareArrow,getFirstName,multiplier} from '../imports/arrowfunc';

Meteor.startup(function(){
  
  const NotFoundPage = () => (
    <div>
      404!
    </div>
  )

  const Header = () => (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li> <Link to="/register" >Sign Up</Link> </li>
          <li> <Link to="/configure" >Configure</Link> </li>
          <li> <Link to="/createmenu" >Create Menu</Link> </li>
          <li> <Link to="/" >POS</Link> </li>
        </ul>
      </div>
    </nav>
  )

  const routes = (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={IndecisionApp} exact={true} />
          <Route path="/register" component={NewCustomerRegistration}  />
          <Route path="/configure" component={ConfigureRestaurant} />
          <Route path="/createmenu" component={CreateMenu} />
          <Route path="/pos" component={POSView} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      
    </BrowserRouter>
  )

  {/*
    Used loadsh _.filter to choose option on screen and it seems to be working fine
  */}

  ReactDOM.render(routes,document.getElementById("app"));

});