import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import IndecisionApp from '../imports/IndecisionApp';

//import {square,squareArrow,getFirstName,multiplier} from '../imports/arrowfunc';

Meteor.startup(function(){
  
  {/*
    Used loadsh _.filter to choose option on screen and it seems to be working fine
  */}

  ReactDOM.render(<IndecisionApp />,document.getElementById("app"));

});