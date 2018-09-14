import React from 'react';
import { TimeSlots } from './api/TimeSlots';

const ViewTimeSlots = (props) =>{
  if(Meteor.isClient){
    Tracker.autorun(function(){
      let timeslots = TimeSlots.find().fetch();
      if(timeslots.length > props.timeslots.length){
        console.log("New entry found");  
        props.updateState(timeslots)
      }
    });
  }  

  return (
    <div className="row">          
      <table>
        <thead>
          <tr>
              <th>Time Slot Name</th>
              <th>Time Slot Starts</th>
              <th>Time Slot Ends</th>
              <th>Action</th>                      
          </tr>
        </thead>
        <tbody>   
          {props.timeslots.map((timeslot,index) => (
          <tr key={timeslot._id}>
            <td>{timeslot.timeslotname}</td>
            <td>{timeslot.timeslotfrom}</td>
            <td>{timeslot.timeslotto}</td>
            <td>
              <a 
                className="waves-effect waves-light btn circle" 
                onClick={() => {props.toggleTimeSlotStatus(timeslot._id)}} >
                <i className="material-icons white-text left">{timeslot.isActive ? "label" : "label_off"}</i>
                {timeslot.isActive ? "Disable" : "Enable"}
              </a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewTimeSlots;