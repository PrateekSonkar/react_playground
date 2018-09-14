import React from 'react';
import { FloorAreas } from './api/FloorAreas';

const ViewFloorAreas = (props) =>{
  if(Meteor.isClient){
    Tracker.autorun(function(){
      let floorareas = FloorAreas.find().fetch();
      if(floorareas.length > props.floorareas.length){
        console.log("New entry found");  
        props.updateStateWithNewDoc(floorareas);
      }
    });
  }
  return (<div className="row">          
    <table>
      <thead>
        <tr>
            <th>Floor Area Name</th>
            <th>Floor Area Code</th>
            <th>Action</th>                      
        </tr>
      </thead>
      <tbody>   
        {props.floorareas.map((floorarea,index) => (
        <tr key={floorarea._id}>
          <td>{floorarea.floorareaname}</td>
          <td>{floorarea.floorareancode}</td>
          <td>
            <a className="waves-effect waves-light btn" onClick={()=>{props.disableFloorArea(floorarea._id)}}>
              <i className="material-icons white-text left">{floorarea.isActive ? "label" : "label_off"}</i>
                {floorarea.isActive ? "Disable" : "Enable"}
            </a>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>)
}

export default ViewFloorAreas;