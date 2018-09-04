//To be included later

import React from 'react';

export default class OrderType extends React.Component{
  constructor(props){
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {
      ordertype : undefined,
      ordereditems : []
    }
    console.log("ordertype ", this.props.orderType);
  }

  onClickHandler(e){
    //e.preventDefault();
    //e.target.elements.option.value
    console.log("Elemts ",e.target.elements)
    console.log("event",e.target.getAttribute("value"));
    this.setState((prevState) => ({ordertype:e.target.getAttribute("value")}));    
  }

  render(){
    return(
      <label style={{margin:15}}>
        <input name="ordertype" type="radio" value={this.props.orderType} onClick={this.onClickHandler} />
        <span>{this.props.orderType}</span>
      </label>              
    )
  }
}