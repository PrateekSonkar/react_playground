import React from 'react';
import {FloorConfigurations} from './api/FloorConfigurations';
import {FloorNumbers} from './api/FloorNumbers'
import {FloorAreas} from './api/FloorAreas'
import {TableSets} from './api/TableSets'

const ViewFloorConfigurations = (props) => {
  if(Meteor.isClient){
    Tracker.autorun(function(){
      let floordetails = FloorConfigurations.find().fetch();
      let flooroptions= FloorNumbers.find().fetch();
      let areaoptions= FloorAreas.find().fetch();
      let tablesetoptions= TableSets.find().fetch();
      if(floordetails.length > props.floorplan.length){
        console.log("New entry found");  
        props.updateState(floordetails)
      }
      if(flooroptions.length > props.flooroptions.length ||areaoptions.length > props.areaoptions.length || tablesetoptions.length > props.tablesetoptions.length){
        console.log("***New Floor Option Details***")
        props.updateDropDown({
          flooroptions:flooroptions,
          areaoptions:areaoptions,
          tablesetoptions:tablesetoptions
        });
      }

      // if(flooroptions.length > props.flooroptions.length || areaoptions.length > props.areaoptions.length || tablesetoptions.length > props.tablesetoptions.length){
      //   console.log("Condition Satisfied")
        // props.updateDropDown({
        //   flooroptions:flooroptions,
        //   areaoptions:areaoptions,
        //   tablesetoptions:tablesetoptions
        // });
      // } else{
      //   console.log("From Tracker ", flooroptions, areaoptions, tablesetoptions)
      // }
      

    });
  }  

  return(
    <div className="row">
      <table>
        <thead>
          <tr>
              <th>Floor</th>
              <th>Area</th>
              <th>Table Set</th>
              <th>Quantity</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.floorplan.map((floordetail,index) => (
            <tr key={index}>
              <td>{floordetail.floorarea}</td>
              <td>{floordetail.floorarea}</td>
              <td>{floordetail.tableset}</td>
              <td>{floordetail.count}</td>
              <td>
                <a 
                  className="waves-effect waves-light btn circle" 
                  onClick={() => {props.toggleStatus(floordetail._id)}} >
                  <i className="material-icons white-text left">{floordetail.isActive ? "label" : "label_off"}</i>
                  {floordetail.isActive ? "Disable" : "Enable"}
                </a>
              </td>
            </tr>
          ))}              
        </tbody>
      </table>          
    </div> 
  )
}

export default ViewFloorConfigurations;