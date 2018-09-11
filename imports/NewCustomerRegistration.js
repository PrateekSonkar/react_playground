import React from 'react';
import shortId from 'shortid';
import {Restaurants} from './api/RegisterNewRestaurant'



export default class NewCustomerRegistration extends React.Component {
  constructor(props){
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.state = {
      error:undefined
    }
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
    //const error = this.props.handleOption(option);
    //this.setState(()=>({error}))
    
  }
  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="yourname" placeholder="Your Name" />
          <input type="text" name="email" placeholder="Email"/>
          <input type="text" name="mobile" placeholder="Mobile Number"/>
          <input type="text" name="contacts" placeholder="Office Contact"/>
          <input type="text" name="restaurataname" placeholder="Restarant Name"/>
          <input type="text" name="location" placeholder="Address"/>
          <input type="text" name="piccode" placeholder="Pin Code"/>
          <div className="row">
            <button className="waves-effect waves-light btn" >Add Option</button>
          </div>
        </ form>
      </div>
    )
  }
}