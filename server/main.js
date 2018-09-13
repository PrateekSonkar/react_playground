import {Meteor} from 'meteor/meteor';
import {MenuItems} from '../imports/api/MenuItems';
import { FloorNumbers } from '../imports/api/FloorNumbers';



console.log("Server Started main.js");
Meteor.startup(function(){

  
    //console.log("Floors ",FloorNumbers.find().fetch());
  
  // MenuItems.insert({
  //   name:"aa",
  //   score:30
  // });
  // console.log(MenuItems.find().fetch());
});