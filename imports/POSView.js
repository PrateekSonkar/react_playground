import React from 'react';
import _lodash from 'lodash';
import FoodGroup from './FoodGroup';
import FoodItemsList from './FoodItemsList';
import SubCategoryFilter from './SubCategoryFilter';

export default class POSView extends React.Component{
  constructor(props){
    super(props);
    this.updateFilterCriteriaGroup = this.updateFilterCriteriaGroup.bind(this);
    this.updateFilterCriteriaSubCategory = this.updateFilterCriteriaSubCategory.bind(this);
    this.state = {
      error:undefined,
      billno : 9,
      menuItems : props.foodMenu,
      filterfooditem :{
        
      }
    }
    //console.log("As Props",props.foodMenu);
    //console.log("As local state",this.state.menuItems);
    //console.log("lodash result",_lodash.uniqBy(this.state.menuItems,{group: "FOOD"}))
    _lodash.uniqBy(props.foodMenu,"group").map((foodGroup,index) => {
      console.log("from map function",foodGroup.group, "index",index);
    })
    _lodash.uniqBy(_lodash.filter(props.foodMenu,{group: "FOOD"}),"subcategory").map((foodGroup,index) => {
      console.log("from map function subcategory ",foodGroup.subcategory, "index",index);
    })
  }

  updateFilterCriteriaGroup(value){
    console.log("updateFilterCriteriaGroup ",value);
    //this.setState((prevState)=>({options : prevState.options.concat([option])}));    
    this.setState((prevState) => ({
      filterfooditem:{
        group:value
      }
    }));
  }

  updateFilterCriteriaSubCategory(value){
    console.log("updateFilterCriteriaSubCategory ",value);
    //this.setState((prevState)=>({options : prevState.options.concat([option])}));    
    this.setState((prevState) => ({
      filterfooditem:{
        ...prevState.filterfooditem,
        subcategory:value
      }
    }));
  }
  
  
  render(){
    return(
      <div className="row">
        <div className="col s8">
          <div className="row">
            <div className="col s3">
              {_lodash.uniqBy(this.props.foodMenu,"group").map((foodGroup,index) => <FoodGroup key={foodGroup.group + index} foodGroup={foodGroup.group} updateFilter={this.updateFilterCriteriaGroup} /> ) }              
            </div>
            <div className="col s9">
              <div className="row">        
                {_lodash.uniqBy(_lodash.filter(this.props.foodMenu,{group: "FOOD"}),"subcategory").map((foodGroup,index) => <SubCategoryFilter key={foodGroup.subcategory + index} foodSubCategory={foodGroup.subcategory} updateFilter={this.updateFilterCriteriaSubCategory} />)}                
              </div>
              <div className="row">
                {_lodash.filter(this.props.foodMenu,this.state.filterfooditem).map((foodItem,index) => <FoodItemsList key={foodItem.group + index} foodItem={foodItem.item} /> ) }                
              </div>              
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="row" >
            <label style={{margin:15}}>
              <input name="group1" type="radio"  />
              <span>Dine In</span>
            </label>              
            <label style={{margin:15}}>
              <input name="group1" type="radio"  />
              <span>Pick Up</span>
            </label>              
            <label style={{margin:15}}>
              <input name="group1" type="radio"  />
              <span>Take Away</span>
            </label>              
          </div>
          <div className="row right-align" >
            <div>
              Bill No: {this.state.billno}
            </div>
          </div>
          <div className="row">
            <table>
              <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Tax</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row right-align">
            Total : {this.state.billno}
          </div>
          <div className="row">
            <div>Payment Mode</div>
            <div>
              <label style={{margin:10}}>
                <input name="paymode" type="radio"  />
                <span>Cash</span>
              </label>              
              <label style={{margin:10}}>
                <input name="paymode" type="radio"  />
                <span>Card</span>
              </label>                              
            </div>
          </div>
          <div className="row">              
            <a 
              className="waves-effect waves-light btn-small" 
              style={{margin:10}}
            >
              Save & Print
            </a>
            <a 
              className="waves-effect waves-light btn-small" 
              style={{margin:10}}
            >
              Print KOT
            </a>
          </div>
        </div>
      </div>
    )
  }
}