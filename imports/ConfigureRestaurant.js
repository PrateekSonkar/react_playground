import React from 'react';

export default class ConfigureRestaurant extends React.Component {
  constructor(props){
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.state = {
      error:undefined
    }
  }

  handleOnSubmit(e){
    e.preventDefault();
    let newRestaurantConfigDetails = {};
    newRestaurantConfigDetails["numoffloor"] = e.target.elements.numoffloor.value;
    newRestaurantConfigDetails["numberofpos"] = e.target.elements.numberofpos.value;
    console.log(newRestaurantConfigDetails);
    //const error = this.props.handleOption(option);
    //this.setState(()=>({error}))
    
  }
  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        {/*
          This form need further bifurcation based on floors
        */}
        <form onSubmit={this.handleOnSubmit}>            
          <input type="text" name="numoffloor" placeholder="Number of Floors" />
          <input type="text" name="numberofpos" placeholder="Tentative Number of POS"/>
          <button>Add Option</button>
        </ form>
      </div>
    )
  }
}