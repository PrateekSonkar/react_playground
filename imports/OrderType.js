//To be included later

import React from 'react';

export default class OrderType extends React.Component{
  constructor(props){
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);    
  }

  onClickHandler(e){
    this.props.updateSelectedOrderType(e.target.getAttribute("value"));
  }

  render(){
    return(
      <label style={{margin:15}}>
        <input name="ordertype" type="radio" value={this.props.ordertype} onClick={this.onClickHandler} />
        <span>{this.props.ordertype}</span>
      </label>              
    )
  }
}