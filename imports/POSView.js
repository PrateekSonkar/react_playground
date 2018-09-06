import React from 'react';
import _lodash from 'lodash';
import update from 'immutability-helper';

import FoodGroup from './FoodGroup';
import FoodItemsList from './FoodItemsList';
import SubCategoryFilter from './SubCategoryFilter';
import ItemOrdered from './ItemOrdered';
import SettlementOptions from './SettlementOptions';
import OrderType from './OrderType';

export default class POSView extends React.Component{
  constructor(props){
    super(props);
    this.updateFilterCriteriaGroup = this.updateFilterCriteriaGroup.bind(this);
    this.updateFilterCriteriaSubCategory = this.updateFilterCriteriaSubCategory.bind(this);
    this.addItemToOrder = this.addItemToOrder.bind(this);
    this.handleQuantityInc = this.handleQuantityInc.bind(this);
    this.handleQuantityDec = this.handleQuantityDec.bind(this);
    this.deleteItemFromOrderList = this.deleteItemFromOrderList.bind(this);
    this.addBillAmount = this.addBillAmount.bind(this);
    this.updateSettlemtOpted = this.updateSettlemtOpted.bind(this);
    this.updateSelectedOrderType = this.updateSelectedOrderType.bind(this);
    this.state = {
      error:undefined,
      billno : 9,
      billAmount : 0,
      settlementopted: "",
      ordertypeselected:"",
      settlementoptions: ["Card","Cash"],
      ordertypes :["Dine In","Pick Up","Take Away"],
      currentorderlist : [],
      filterfooditem :{}      
    }
    //{itemid:"T12",value:{item:"A",quantity:1,rate:200}},{itemid:"T13",value:{item:"B",quantity:1,rate:200}}
  }

  testMethod(){
    alert("I was called");
  }

  updateSelectedOrderType(value){
    this.setState((prevState) => {
      return {
        ordertypeselected: value
      }
    })
  }

  updateSettlemtOpted(value){
    this.setState((prevState) => {
      return {
        settlementoption: value
      }
    })
  }

  addBillAmount(){
    this.setState((prevState) => {
      let totalAmount = 0;
      _lodash.forEach(prevState.currentorderlist,function(value){
        totalAmount += (value.value.rate * value.value.quantity);
      });
      this.setState((prevState) => {
        return {
          billAmount : totalAmount
        }
      })
    });
  }

  addItemToOrder(itemObject){
    itemObject["quantity"] = 1;
    let isAvailable = _lodash.findIndex(this.state.currentorderlist,{itemId:itemObject["id"]})
    if(isAvailable === -1){
      let forOrder = {"itemId":itemObject["id"],value:itemObject}
      this.setState((prevState) =>{
        return {
          currentorderlist:prevState.currentorderlist.concat([forOrder])
        }
      },()=>{this.addBillAmount()});
    } else {
      alert("Item already in order");
    }
  }

  //will only increase quantity by 1
  handleQuantityInc(quantity,forItem){    
    //quantity is not used for now but scoped for future use;
    let isAvailable = _lodash.findIndex(this.state.currentorderlist,{itemId:forItem});
    if(isAvailable > -1){
      this.setState((prevState) => {
        let updatedItem = update(prevState.currentorderlist[isAvailable],{value:{quantity:{$set:prevState.currentorderlist[isAvailable].value.quantity + 1}}});
        let obj = Object.assign({},prevState);        
        delete obj.currentorderlist[isAvailable];
        obj.currentorderlist[isAvailable] = updatedItem;        
        return {
          currentorderlist : obj.currentorderlist
        }
      },()=>{this.addBillAmount()});
    }
  }

  //will only increase quantity by 1
  handleQuantityDec(quantity,forItem){
    //quantity is not used for now but scoped for future use;
    let isAvailable = _lodash.findIndex(this.state.currentorderlist,{itemId:forItem});
    if(isAvailable > -1){
        this.setState((prevState) => {
          if(prevState.currentorderlist[isAvailable].value.quantity > 1){
            let updatedItem = update(prevState.currentorderlist[isAvailable],{value:{quantity:{$set:prevState.currentorderlist[isAvailable].value.quantity - 1}}});
            let obj = Object.assign({},prevState);        
            delete obj.currentorderlist[isAvailable];
            obj.currentorderlist[isAvailable] = updatedItem;        
            return {
              currentorderlist : obj.currentorderlist
            } 
          } else if (prevState.currentorderlist[isAvailable].value.quantity === 1){
              //condition to remove
              this.deleteItemFromOrderList(forItem);
            }
        },()=>{this.addBillAmount()});
    }
  }

  deleteItemFromOrderList(forItem){
    let isAvailable = _lodash.findIndex(this.state.currentorderlist,{itemId:forItem});
    if(isAvailable > -1){
      this.setState((prevState) => {
        let obj = Object.assign({},prevState);
        obj.currentorderlist.splice(isAvailable,1);
        return {
          currentorderlist : obj.currentorderlist 
        }
      },()=>{this.addBillAmount()})
    }
  }
  
  updateFilterCriteriaGroup(value){
    this.setState((prevState) => ({
      filterfooditem:{
        group:value
      }
    }));
  }

  updateFilterCriteriaSubCategory(value){
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
        <div className="col s7">
          <div className="row">
            <div className="col s4">
              <ul className="collection">
                {_lodash.uniqBy(this.props.foodMenu,"group").map((foodGroup,index) => <FoodGroup key={foodGroup.group + index} foodGroup={foodGroup.group} updateFilter={this.updateFilterCriteriaGroup} /> ) }
              </ul>
            </div>
            <div className="col s8">
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
        <div className="col s5"> 
          <div style={{margin:15}} >         
            <div className="row">
              {this.state.ordertypes.map((ordertype,index) => <OrderType ordertype={ordertype} updateSelectedOrderType={this.updateSelectedOrderType} key={ordertype+index} /> )}              
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
                      <th>Actions</th>
                  </tr>
                </thead>
                <tbody>                
                  {this.state.currentorderlist.map((item,index) => <ItemOrdered key={index} item={item} handleQuantityInc={this.handleQuantityInc} handleQuantityDec={this.handleQuantityDec}  deleteItemFromOrderList={this.deleteItemFromOrderList} /> )}
                </tbody>
              </table>
            </div>
            <div className="row right-align">
              Total : {this.state.billAmount}
            </div>
            <div className="row">
              <div>Payment Mode</div>
              <div>
                {this.state.settlementoptions.map((settlementoption) => <SettlementOptions settlementoption={settlementoption} updateSettlemtOpted={this.updateSettlemtOpted} key={settlementoption} />)}
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
      </div>
    )
  }
}