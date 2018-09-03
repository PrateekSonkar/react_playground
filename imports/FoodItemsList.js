import React from 'react';

export default class FoodItemsList extends React.Component{
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
      <a className="waves-effect waves-light btn-large" style={{margin:10}} value={this.props.foodItem} onClick={this.onClickHandler} >{this.props.foodItem}</a>
    );
  }
}