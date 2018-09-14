import React from 'react';
import _lodash from 'lodash';
import { OrderTypes } from './api/OrderTypes';
import ViewOrderTypes from './ViewOrderTypes';


export default class CreateOrderType extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      ordertypes : []
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  componentDidMount(){
    let ordertypes = OrderTypes.find().fetch();
    this.setState((prevState) => {
      return {
        ordertypes:ordertypes
      }
    });
  }

  handleOnSubmit(e){
    e.preventDefault();
    console.log(e.target.elements.taxname);
    let neworderttypeRate = {};
    neworderttypeRate["orderttypename"] = e.target.elements.orderttypename.value;
    neworderttypeRate["orderttypecode"] = e.target.elements.orderttypecode.value;  
    neworderttypeRate["isActive"] = true;
    OrderTypes.insert(neworderttypeRate)  
    console.log(neworderttypeRate);
    this.setState((prevState) => {
      return {
        ordertypes : prevState.ordertypes.concat([neworderttypeRate])
      }
    });
  }

  updateState = (obj) => {
    this.setState((prevState) => {
      return {
        ordertypes : obj
      }
    });
  }

  toggleStatus = (code) => {
    console.log("Disabled disableFloorArea: ", code);
    let index = _lodash.findIndex(this.state.ordertypes,{_id:code});
    if(index > -1){
      let toggledState = !this.state.ordertypes[index].isActive;
      OrderTypes.update({_id:code},{$set:{isActive:toggledState}})
      this.setState((prevState) => {
        prevState.ordertypes[index].isActive = toggledState;
        let obj = Object.assign({},prevState);
        return{
          ordertypes:obj.ordertypes
        }
      });  
    }
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 m3" />
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title center-align"><b>Create Order Type</b></span>  
                <div>
                  <form onSubmit={this.handleOnSubmit} >
                    <div className="input-field">
                      <input type="text" id="orderttypename" name="orderttypename" />
                      <label htmlFor="orderttypename">Order Type Name</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="orderttypecode" name="orderttypecode" />
                      <label htmlFor="orderttypecode">Order Type Code</label>
                    </div>
                    <div className="center-align">
                      <button 
                          className="waves-effect waves-light btn-small deep-orange" 
                          style={{margin:10}}                
                        >
                          Create
                        </button>
                    </div>  
                  </form>
                </div>
              </div>
            </div>    
          </div>
          <div className="col s12 m3" />
        </div>
        <div className="row"></div>
        <div className="row">
          <ViewOrderTypes 
            ordertypes={this.state.ordertypes}  
            updateState={this.updateState}
            toggleStatus={this.toggleStatus}
          />
        </div>
        
      </div>
    )
  }

}