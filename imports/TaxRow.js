import React from 'react';
import {Taxes} from './api/Taxes';

const TaxRow = (props) => {
  if(Meteor.isClient){
    Tracker.autorun(function(){
      let  taxes = Taxes.find().fetch();
      if(taxes.length > props.taxrates.length){
        console.log("New entry found");  
        props.updateState(taxes)
      }
    });
  }
  
  return(
    <div className="row">          
          <table>
            <thead>
              <tr>
                  <th>Tax Name</th>
                  <th>Tax Code</th>
                  <th>Tax %age</th>
                  <th>Action</th>                      
              </tr>
            </thead>
            <tbody>   
              {props.taxrates.map((taxrate,index) => (
                <tr key={taxrate._id}>
                <th>{taxrate.taxname}</th>
                <th>{taxrate.taxcode}</th>
                <th>{taxrate.taxpercentage}</th>
                <th>
                  <a className="waves-effect waves-light btn" onClick={()=>{props.disableTax(taxrate._id)}}>
                  <i className="material-icons white-text left">{taxrate.taxstatus ? "label" : "label_off"}</i>
                    {taxrate.taxstatus ? "Disable" : "Enable"}
                  </a>
                </th>                      
              </tr>
              ))}
            </tbody>
          </table>
        </div>
    
  )
  }


export default TaxRow