import React from 'react';
import {Restaurants} from './api/RegisterNewRestaurant';

export default class ConfigureRestaurant extends React.Component {
  constructor(props){
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this);
    this.state = {
      error:undefined
    }
    console.log(props)
    console.log(props.match.params.id)
  }

  clearForm(e){
    e.target.elements.numoffloor.value = "";
    e.target.elements.numberofpos.value = "";
  }

  handleOnSubmit(e){
    e.preventDefault();
    let newRestaurantConfigDetails = {};
    newRestaurantConfigDetails["numoffloor"] = e.target.elements.numoffloor.value;
    newRestaurantConfigDetails["numberofpos"] = e.target.elements.numberofpos.value;
    console.log(newRestaurantConfigDetails);
    Restaurants.update({_id:this.props.match.params.id},{
      $set:newRestaurantConfigDetails
    });
    this.clearForm(e);
    //Restaurants.update();
    //const error = this.props.handleOption(option);
    //this.setState(()=>({error}))
    
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 m3" />
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title center-align"><b>Configure Restaurant</b></span>
                {this.state.error && <div><span><b>{this.state.error}</b></span></div>}
                <form onSubmit={this.handleOnSubmit}>          
                  <div className="input-field">
                    <input type="text" id="numoffloor" name="numoffloor" />
                    <label htmlFor="numoffloor">Number of Floors</label>
                  </div>  
                  <div className="input-field">
                    <input type="text" id="numberofpos" name="numberofpos" />
                    <label htmlFor="numberofpos">Tentative Number of POS</label>
                  </div>
                  <div className="row center-align">
                    <button className="waves-effect waves-light btn deep-orange">Add Config</button>
                  </div>
                </form>
              </div>
            </div>
            
            {/*
              This form need further bifurcation based on floors
            */}
            
          </div>
          <div className="col s12 m3" />
        </div>
      </div>
        
    )
  }
}