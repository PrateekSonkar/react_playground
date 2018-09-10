import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {BrowserRouter, Route,Switch, Link,NavLink } from 'react-router-dom';
import AppRouter from '../router/AppRouter'

//import {square,squareArrow,getFirstName,multiplier} from '../imports/arrowfunc';

Meteor.startup(function(){
  {/*
    Used loadsh _.filter to choose option on screen and it seems to be working fine
  */}

  ReactDOM.render(<AppRouter /> ,document.getElementById("app"));

});