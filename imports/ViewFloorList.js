import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import { FloorNumbers } from './api/FloorNumbers';

const ViewFloorList = (props) => {  
  if(Meteor.isClient){
    Tracker.autorun(function(){
      let floors = FloorNumbers.find().fetch();
      if(floors.length > props.floordetails.length){
        console.log("New entry found");  
        props.updateStateWithNewDoc(floors)
      }
    });
  }  
  console.log("Props ,", props)
  return (
    <div className="row">          
      <table>
        <thead>
          <tr>
              <th>Floor Name</th>
              <th>Floor Code</th>
              <th>Action</th>                      
          </tr>
        </thead>
        <tbody>   
          {props.floordetails.map((floorarea,index) => (
          <tr key={floorarea._id}>
            <td>{floorarea.floorname}</td>
            <td>{floorarea.floorcode}</td>
            <td>
              <a className="waves-effect waves-light btn circle" onClick={() => {props.updateFloorStatus(floorarea._id)}} >
                <i className="material-icons white-text left">{floorarea.isActive ? "label" : "label_off"}</i>
                {floorarea.isActive ? "Disable" : "Enable"}
              </a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewFloorList;