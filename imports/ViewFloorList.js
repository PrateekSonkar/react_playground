import React from 'react';
import { Tracker } from 'meteor/tracker'
import { FloorNumbers } from './api/FloorNumbers';


Tracker.autorun(function(){
  //console.log("Floors ",FloorNumbers.find().fetch());
});

console.log("From ViewFloorList");
// const ViewFloorList;


// export default ViewFloorList;