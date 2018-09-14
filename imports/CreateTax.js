import React from 'react';
import TaxRow from './TaxRow';
import {Taxes} from './api/Taxes';
import { Tracker } from 'meteor/tracker';
import _lodash from 'lodash';

export default class CreateTax extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      taxrates : []
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.toggledState = this.toggledState.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount(){
    let taxrates = Taxes.find().fetch();
    this.setState((prevState) => {
      return {
        taxrates : taxrates
      }
    });  
  }
  
  handleOnSubmit = (e) => {
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

  toggledState = (taxcode) => {
    console.log("Tax Disabled : ", taxcode);
    let index = _lodash.findIndex(this.state.taxrates,{_id:taxcode});
    if(index > -1){
      let toggledState = !this.state.taxrates[index].isEnabled;
      Taxes.update({_id:taxcode},{$set:{isEnabled:toggledState}});
      this.setState((prevState) => {
        prevState.taxrates[index].isEnabled = toggledState;
        let obj = Object.assign({},prevState);
        return{
          taxrates:obj.taxrates
        }
      });  
    }
  }

  updateState = (obj) => {
    this.setState((prevState) => {
      return {
        taxrates : obj
      }
    });
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 m3" />
          <div className="col s12 m6">
            <div className="card">
                <div className="card-content">
                  <span className="card-title center-align"><b>Create Tax</b></span>
                  <div>
                  <form onSubmit={this.handleOnSubmit} >
                    <div className="input-field">
                      <input type="text" id="taxname" name="taxname" />
                      <label htmlFor="taxname">Tax Name</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="taxcode" name="taxcode" />
                      <label htmlFor="taxcode">Tax Code</label>
                    </div>              
                    <div className="input-field">
                      <input type="text" id="taxpercentage" name="taxpercentage" />
                      <label htmlFor="taxpercentage">Tax Percentage</label>
                    </div>
                    <div className="center-align">
                      <button 
                          className="waves-effect waves-light btn-small deep-orange" 
                          style={{margin:10}}                
                        >
                          Create
                        </button>
                    </div>
                  </form>
                  </div>
                </div>
            </div>      
          </div>
          <div className="col s12 m3" />
        </div>
        <div className="row"></div>
        <div className="row">
          <TaxRow 
            taxrates = {this.state.taxrates}
            toggledState = {this.toggledState}
            updateState = {this.updateState}
          />
        </div>
      </div>
    )
  }

}