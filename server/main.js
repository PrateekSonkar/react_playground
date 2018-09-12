import {Meteor} from 'meteor/meteor';
import {MenuItems} from '../imports/api/MenuItems';
import { Tracker } from 'meteor/tracker';
import { FloorNumbers } from '../imports/api/FloorNumbers';

Tracker.autorun(function(){
  console.log("Floors ",FloorNumbers.find().fetch());
});

console.log("Server Started main.js");
Meteor.startup(function(){
  // MenuItems.insert({
  //   name:"aa",
  //   score:30
  // });
  // console.log(MenuItems.find().fetch());
});