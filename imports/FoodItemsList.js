import React from 'react';

export default class FoodItemsList extends React.Component{
  constructor(props){
    super(props)
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e){
    e.preventDefault();
    //e.target.elements.option.value
    //console.log("event",e.target.getAttribute("value"));
    this.props.addItemToOrder(JSON.parse(e.target.getAttribute("value")));
  }

  render(){
    return(
      <li 
        className="collection-item" 
        value={JSON.stringify(this.props.foodItem)} 
        onClick={this.onClickHandler}
      >
          {this.props.foodItem.item}
      </li>
    );
  }
}