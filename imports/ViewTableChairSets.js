import React from 'react';
import { TableSets } from './api/TableSets';

const ViewTableChairSets = (props) => {
  if(Meteor.isClient){
    Tracker.autorun(function(){
      let tablesets = TableSets.find().fetch();
      console.log("query ",tablesets.length)
      console.log("props ",props.tablechairsets.length)
      if(tablesets.length > props.tablechairsets.length){
        console.log("New entry found");  
        props.updateState(tablesets)
      }
    });
  }  

  return(
    <div className="row">          
      <table>
        <thead>
          <tr>
              <th>Set Name</th>
              <th>Set Code</th>
              <th>No of Table</th>
              <th>No of Chairs</th>
              <th>Action</th>                      
          </tr>
        </thead>
        <tbody>   
          {props.tablechairsets.map((tablechairset,index) => (
          <tr key={tablechairset._id}>
            <td>{tablechairset.tcsetname}</td>
            <td>{tablechairset.tccode}</td>
            <td>{tablechairset.tcsettable}</td>
            <td>{tablechairset.tcsetchairs}</td>
            <td>
              <a className="waves-effect waves-light btn circle" onClick={() => {props.toggleStatus(tablechairset._id)}} >
                <i className="material-icons white-text left">{tablechairset.isActive ? "label" : "label_off"}</i>
                {tablechairset.isActive ? "Disable" : "Enable"}
              </a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewTableChairSets;