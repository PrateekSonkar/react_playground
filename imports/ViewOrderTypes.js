import React from 'react';
import { OrderTypes } from './api/OrderTypes';

const ViewOrderTypes = (props) =>{
  if(Meteor.isClient){
    Tracker.autorun(function(){
      let ordertypes = OrderTypes.find().fetch();
      if(ordertypes.length > props.ordertypes.length){
        console.log("New entry found");  
        props.updateState(ordertypes)
      }
    });
  }
  return(
    <div className="row">          
      <table>
        <thead>
          <tr>
              <th>Order Type</th>
              <th>Order Type Code</th>
              <th>Action</th>                      
          </tr>
        </thead>
        <tbody>   
          {props.ordertypes.map((ordertype,index) => (
            <tr key={ordertype._id}>
            <td>{ordertype.orderttypename}</td>
            <td>{ordertype.orderttypecode}</td>
            <td>
              <a className="waves-effect waves-light btn" onClick={() => {props.toggleStatus(ordertype._id)}} >
                <i className="material-icons white-text left">{ordertype.isActive ? "label" : "label_off"}</i>
                {ordertype.isActive ? "Disable" : "Enable"}
              </a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewOrderTypes;