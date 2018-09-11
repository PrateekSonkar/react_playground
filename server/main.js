import {Meteor} from 'meteor/meteor';
import {MenuItems} from '../imports/api/MenuItems';

console.log("Server Started main.js");
Meteor.startup(function(){
  // MenuItems.insert({
  //   name:"aa",
  //   score:30
  // });
  // console.log(MenuItems.find().fetch());
});