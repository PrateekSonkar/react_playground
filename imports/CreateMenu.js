import React from 'react';

export default class CreateMenu extends React.Component {
  constructor(props){
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.state = {
      error:undefined
    }
  }

  handleOnSubmit(e){
    e.preventDefault();
    let menuItem = {};
    menuItem["group"] = e.target.elements.group.value;
    menuItem["subgroup"] = e.target.elements.subgroup.value;
    menuItem["category"] = e.target.elements.category.value;
    menuItem["subcategory"] = e.target.elements.subcategory.value;
    menuItem["itemname"] = e.target.elements.itemname.value;
    menuItem["menurate"] = e.target.elements.menurate.value;
    menuItem["tax"] = e.target.elements.tax.value;
    console.log(menuItem);
    //const error = this.props.handleOption(option);
    //this.setState(()=>({error}))
    
  }
  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="group" placeholder="Group"/>
          <input type="text" name="subgroup" placeholder="Sub Group"/>
          <input type="text" name="category" placeholder="Category"/>
          <input type="text" name="subcategory" placeholder="Sub Category"/>
          <input type="text" name="itemname" placeholder="Item Name"/>
          <input type="text" name="menurate" placeholder="Menu Rate"/>
          <input type="text" name="tax" placeholder="Applicable Taxes"/>
          <button>Add Option</button>
        </ form>
      </div>
    )
  }
}