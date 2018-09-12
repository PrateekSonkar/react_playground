import React from 'react';
import TaxRow from './TaxRow';
import {Taxes} from './api/Taxes';
import { Tracker } from 'meteor/tracker';

export default class CreateTax extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      taxrates : []
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.disableTax = this.disableTax.bind(this);
  }

  
  handleOnSubmit(e){
    e.preventDefault();
    console.log(e.target.elements.taxname);
    let newTaxRate = {};
    newTaxRate["taxname"] = e.target.elements.taxname.value;
    newTaxRate["taxcode"] = e.target.elements.taxcode.value;
    newTaxRate["taxpercentage"] = e.target.elements.taxpercentage.value;  
    newTaxRate["isEnabled"] = true;  
    console.log(newTaxRate);
    Taxes.insert(newTaxRate);
    this.setState((prevState) => {
      return {
        taxrates : prevState.taxrates.concat([newTaxRate])
      }
    });
  }

  disableTax(taxcode){
    console.log("Tax Disabled : ", taxcode);
  }

  render(){
    return(
      <div>
        <div className="row">
          <form onSubmit={this.handleOnSubmit} >
            <input type="text" placeholder="Tax Name" name="taxname"/>
            <input type="text" placeholder="Tax Code" name="taxcode" />
            <input type="text" placeholder="Tax Percentage" name="taxpercentage" />
            <button 
                className="waves-effect waves-light btn-small" 
                style={{margin:10}}                
              >
                Create
              </button>
          </form>
        </div>
        <div className="row"></div>
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
              {this.state.taxrates.map((taxrate,index) => <TaxRow key={index} taxname={taxrate.taxname} taxcode={taxrate.taxcode} taxpercentage={taxrate.taxpercentage} disableTax={this.disableTax}  /> )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}