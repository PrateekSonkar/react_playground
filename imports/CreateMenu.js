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
      <div className="container">
        <div className="row">
          <div className="col s12 m3" />
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title center-align"><b>Create Menu</b></span>
                {this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.handleOnSubmit}>
                  <div className="input-field">
                    <input type="text" id="group" name="group" />
                    <label htmlFor="group">Group</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="subgroup" name="subgroup" />
                    <label htmlFor="subgroup">Sub Group</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="category" name="category" />
                    <label htmlFor="category">Category</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="subcategory" name="subcategory" />
                    <label htmlFor="subcategory">Sub Category</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="itemname" name="itemname" />
                    <label htmlFor="itemname">Item Name</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="menurate" name="menurate" />
                    <label htmlFor="menurate">Menu Rate</label>
                  </div>
                  <div className="row">
                    <div><b>Tax status on Menu rates</b></div>
                    <div className="col s6 m3">
                      <label>
                        <input name="istaxincluded" type="radio" value={true}/>
                        <span>Tax Included</span>
                      </label>
                    </div>
                    <div className="col s6 m3">
                      <label>
                        <input name="istaxincluded" type="radio" value={false}/>
                        <span>Tax Exluded</span>
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div><b>Select applicable taxes</b></div>
                    {this.state.taxrates.map((tax,index) => (
                      <div className="col m3 s12" key={tax._id}>
                        <label>
                          <input type="checkbox" name="tax" value={tax.taxpercentage} rel={tax.taxcode}/>
                          <span>{tax.taxname}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="center-align">
                    <button className="waves-effect waves-light btn deep-orange">Add Menu Item</button>
                  </div>
                  

                </ form>
              </div>
            </div>    
            
          </div>
          <div className="col s12 m3" />
        </div>
        <div className="row">
        <ViewMenuItems 
          menuitems = {this.state.menuitems}
          updateState = {this.updateState}
          updateStateTax = {this.updateStateTax}
        />
        </div>
      </div>
    )
  }
}