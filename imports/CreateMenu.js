import React from 'react';
import {Taxes} from './api/Taxes';
import {MenuItems} from './api/MenuItems';
import ViewMenuItems from './ViewMenuItems'

export default class CreateMenu extends React.Component {
  constructor(props){
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.updateState = this.updateState.bind(this)
    this.state = {
      error:undefined,
      taxrates : [],
      menuitems : [] 
    }
  }

  componentDidMount() {
    let taxes = Taxes.find({isEnabled:true}).fetch();
    console.log("taxes ", taxes);
    this.setState((prevState) => {
      return{
        taxrates:taxes
      }
    });
  }

  handleOnChange(e){
    let value = e.target.value;
    console.log("andle On change ", value);
  }

  handleOnClick(e){
    e.preventDefault();
    let checkedBoxes = document.querySelectorAll('input[name=tax]:checked');
    console.log(checkedBoxes);
    console.log(checkedBoxes[0].value);
    console.log(checkedBoxes[0].attributes.rel.value);
    
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
    menuItem["isActive"] = true;
    menuItem["istaxincluded"] = document.querySelector('input[name="istaxincluded"]:checked').value === "true" ? true : false; 
    menuItem["taxes"] = [];
    let checkedBoxes = document.querySelectorAll('input[name=tax]:checked');
    checkedBoxes.forEach(function(nodeElem,index){
      let key = nodeElem.attributes.rel.value
      let value = nodeElem.value;
      let temp = {};
      temp[key] = value
      console.log("from loop ", key, value);
      menuItem["taxes"].push(temp)
    });    
    MenuItems.insert(menuItem);
  }

  updateState = (obj) => {
    this.setState((prevState) => {
      return {
        menuitems : obj
      }
    });
  }

  updateStateTax = (obj) => {
    this.setState((prevState) => {
      return {
        taxrates : obj
      }
    });
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
          <div className="row">
            <div><b>Tax status on Menu rates</b></div>
            <div className="col s6 m2">
              <label>
                <input name="istaxincluded" type="radio" value={true}/>
                <span>Tax Included</span>
              </label>
            </div>
            <div className="col s6 m2">
              <label>
                <input name="istaxincluded" type="radio" value={false}/>
                <span>Tax Exluded</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div><b>Select applicable taxes</b></div>
            {this.state.taxrates.map((tax,index) => (
              <div className="col m2 s12" key={tax._id}>
                <label>
                  <input type="checkbox" name="tax" value={tax.taxpercentage} rel={tax.taxcode}/>
                  <span>{tax.taxname}</span>
                </label>
              </div>
            ))}
          </div>
          <button className="waves-effect waves-light btn">Add Option</button>

        </ form>
        <ViewMenuItems 
          menuitems = {this.state.menuitems}
          updateState = {this.updateState}
          updateStateTax = {this.updateStateTax}
        />
      </div>
    )
  }
}