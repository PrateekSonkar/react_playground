import React from 'react';
import shortId from 'shortid';
import {Restaurants} from './api/RegisterNewRestaurant'



export default class NewCustomerRegistration extends React.Component {
  constructor(props){
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.cleanFields = this.cleanFields.bind(this)
    this.state = {
      error:undefined
    }
  }

  cleanFields(e){
    e.target.elements.yourname.value = "";
    e.target.elements.email.value = "";
    e.target.elements.mobile.value = "";
    e.target.elements.contacts.value = "";
    e.target.elements.restaurataname.value = "";
    e.target.elements.location.value = "";
    e.target.elements.piccode.value = "";
  }

  handleOnSubmit(e){
    e.preventDefault();
    let newCustomerDetail = {};
    newCustomerDetail["yourname"] = e.target.elements.yourname.value;
    newCustomerDetail["email"] = e.target.elements.email.value;
    newCustomerDetail["mobile"] = e.target.elements.mobile.value;
    newCustomerDetail["contacts"] = e.target.elements.contacts.value;
    newCustomerDetail["restaurataname"] = e.target.elements.restaurataname.value;
    newCustomerDetail["location"] = e.target.elements.location.value;
    newCustomerDetail["piccode"] = e.target.elements.piccode.value;
    newCustomerDetail["shortid"] = shortId.generate();    
    Restaurants.insert(newCustomerDetail);
    this.cleanFields(e)
    //const error = this.props.handleOption(option);
    //this.setState(()=>({error}))
    
  }
  render(){
    return(
      <div className="container">
        <div className="row">
        <div className="col s12 m3"/>
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <span className="card-title center-align"><b>New Registration</b></span>
              <div><span>{this.state.error && <p>{this.state.error}</p> }</span></div>
              <form onSubmit={this.handleOnSubmit}>
                <div className="input-field">
                  <input type="text" id="yourname" name="yourname" />
                  <label htmlFor="yourname">Name</label>
                </div>
                <div className="input-field">
                  <input type="text" id="email" name="email" />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <input type="text" id="mobile" name="mobile" />
                  <label htmlFor="mobile">Mobile</label>
                </div>
                <div className="input-field">
                  <input type="text" id="contacts" name="contacts" />
                  <label htmlFor="contacts">Office Contacts (Landline Number)</label>
                </div>
                <div className="input-field">
                  <input type="text" id="restaurataname" name="restaurataname" />
                  <label htmlFor="restaurataname">Restarant Name</label>
                </div>
                <div className="input-field">
                  <input type="text" id="location" name="location" />
                  <label htmlFor="location">Address</label>
                </div>
                <div className="input-field">
                  <input type="text" id="piccode" name="piccode" />
                  <label htmlFor="piccode">Pin Code</label>
                </div>
                <div className="row center-align">
                  <button className="waves-effect waves-light btn deep-orange" >Register</button>
                </div>
              </ form>
            </div>
          </div>
          
          
        </div>
        <div className="col s12 m3" />
        </div>
      
      </div>
    )
  }
}