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
    let newCustomerDetail = {};
    newCustomerDetail["restauranttype"] = e.target.elements.restauranttype.value;
    newCustomerDetail["numoffloor"] = e.target.elements.numoffloor.value;
    newCustomerDetail["areaonfloor"] = e.target.elements.areaonfloor.value;
    newCustomerDetail["nooftables"] = e.target.elements.nooftables.value;
    newCustomerDetail["numberofchairs"] = e.target.elements.numberofchairs.value;
    newCustomerDetail["contacts"] = e.target.elements.contacts.value;
    newCustomerDetail["numberofpos"] = e.target.elements.numberofpos.value;
    console.log(newCustomerDetail);
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
          <input type="text" name="restauranttype" placeholder="Dine In/Take Away" />
          <input type="text" name="numoffloor" placeholder="Number of Floors" />
          <input type="text" name="areaonfloor" placeholder="Area on Floor (Bar/Family/Smoking/Non-Smoking)" />            
          <input type="text" name="nooftables" placeholder="Number Of Tables"/>
          <input type="text" name="numberofchairs" placeholder="Number Of Chairs"/>            
          <input type="text" name="numberofpos" placeholder="Tentative Number of POS"/>
          <button>Add Option</button>
        </ form>
      </div>
    )
  }
}