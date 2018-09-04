import React from 'react';
import _lodash from 'lodash';
import FoodGroup from './FoodGroup';
import FoodItemsList from './FoodItemsList';
import SubCategoryFilter from './SubCategoryFilter';
import ItemOrdered from './ItemOrdered';
//import OrderType from './OrderType';

export default class POSView extends React.Component{
  constructor(props){
    super(props);
    this.updateFilterCriteriaGroup = this.updateFilterCriteriaGroup.bind(this);
    this.updateFilterCriteriaSubCategory = this.updateFilterCriteriaSubCategory.bind(this);
    this.addItemToOrder = this.addItemToOrder.bind(this);
    this.state = {
      error:undefined,
      billno : 9,
      menuItems : props.foodMenu,
      currentorderlist : [{itemid:"T12",value:{item:"A",quantity:1,rate:200}}],
      filterfooditem :{}      
    }
    //{itemid:"T12",value:{item:"A",quantity:1,rate:200}},{itemid:"T13",value:{item:"B",quantity:1,rate:200}}
  }

  testMethod(){
    alert("I was called");
  }

  addItemToOrder(itemObject){
    console.log("addItemToOrder", itemObject);
    itemObject["quantity"] = 1;
    let isAvailable = _lodash.findIndex(this.state.currentorderlist,{itemId:itemObject["id"]})
    if(isAvailable === -1){
      console.log("Item can be added to Order");
      let forOrder = {"itemId":itemObject["id"],value:itemObject}
      console.log("Item to be added : ", forOrder);
      //this.setState((prevState) => {currentorderlist : prevState.currentorderlist.push(forOrder)});
      this.setState((prevState) =>{
        return {
          currentorderlist:prevState.currentorderlist.concat([forOrder])
        }
      });
    } else {
      alert("Item already in order");
    }
  }

  handleQuantityInc(value){

  }

  handleQuantityDec(value){
    
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
                <ul className="collection" >
                  {_lodash.filter(this.props.foodMenu,this.state.filterfooditem).map((foodItem,index) => <FoodItemsList key={foodItem.id} foodItem={foodItem} addItemToOrder={this.addItemToOrder} /> ) }                  
                </ul>
                
              </div>              
            </div>
          </div>
        </div>
        <div className="col s4">          
          <div className="row" >
            <label style={{margin:15}}>
              <input name="ordertype" type="radio"  />
              <span>Dine In</span>
            </label>              
            <label style={{margin:15}}>
              <input name="ordertype" type="radio"  />
              <span>Pick Up</span>
            </label>              
            <label style={{margin:15}}>
              <input name="ordertype" type="radio"  />
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
                {this.state.currentorderlist.map((item,index) => <ItemOrdered key={index} item={item} /> )}
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