import React from 'react';

export default class FoodGroup extends React.Component{
  constructor(props){
    super(props)
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e){
    e.preventDefault();
    //e.target.elements.option.value
    console.log("event",e.target.getAttribute("value"));
    this.props.updateFilter(e.target.getAttribute("value"));
  }

  render(){
    return(
      <li className="collection-item" style={{margin:10}} value={this.props.foodGroup} onClick={this.onClickHandler} >{this.props.foodGroup}</li>
    );
  }
}