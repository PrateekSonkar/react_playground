import React from 'react';

export default class SubCategoryFilter extends React.Component{
  constructor(props){
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e){
    //e.preventDefault();
    //e.target.elements.option.value
    console.log("Elemts ",e.target.elements)
    console.log("event",e.target.getAttribute("value"));
    this.props.updateFilter(e.target.getAttribute("value"));
  }

  render(){
    return(
      <label style={{margin:15}}>
        <input name="subcategory" type="radio" value={this.props.foodSubCategory} onClick={this.onClickHandler} />
        <span>{this.props.foodSubCategory}</span>
      </label>              
    )
  }
}