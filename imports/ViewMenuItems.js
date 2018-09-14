import React from 'react';
import {MenuItems} from './api/MenuItems';
import {Taxes} from './api/Taxes';

const ViewMenuItems = (props) => {
  if(Meteor.isClient){
    Tracker.autorun(function(){
      let menuitems = MenuItems.find().fetch();
      let taxes = Taxes.find({isEnabled:true}).fetch();
      if(menuitems.length > props.menuitems.length){
        console.log("New entry found");  
        props.updateState(menuitems)
        props.updateStateTax(taxes)
      }
    });
  }

  return (
    <div className="row">          
      <table>
        <thead>
          <tr>
              <th>Group</th>
              <th>Sub Group</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Item Name</th>                      
              <th>Rates</th>
              <th>Tax Included</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>   
          {props.menuitems.map((menuitem,index) => (
          <tr key={menuitem._id}>
            <td>{menuitem.group}</td>
            <td>{menuitem.subgroup}</td>
            <td>{menuitem.category}</td>
            <td>{menuitem.subcategory}</td>
            <td>{menuitem.itemname}</td>
            <td>{menuitem.menurate}</td>
            <td>{menuitem.istaxincluded ? "Yes" : "No"}</td>
            <td>
              <a 
                className="waves-effect waves-light btn circle" 
                onClick={() => {props.togglemenuitemStatus(menuitem._id)}} >
                <i className="material-icons white-text left">{menuitem.isActive ? "label" : "label_off"}</i>
                {menuitem.isActive ? "Disable" : "Enable"}
              </a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewMenuItems;