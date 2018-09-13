import React from 'react';
import { OrderTypes } from './api/OrderTypes';
import ViewOrderTypes from './ViewOrderTypes';


export default class CreateOrderType extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      ordertypes : []
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.disableOrderTypeConfig = this.disableOrderTypeConfig.bind(this);
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

  disableOrderTypeConfig(code){
    console.log("Disabled disableOrderTypeConfig: ", code);
  }

  render(){
    return(
      <div>
        <div className="row">
          <form onSubmit={this.handleOnSubmit} >
            <input type="text" placeholder="Order Type Name" name="orderttypename"/>
            <input type="text" placeholder="Order Type Code" name="orderttypecode"/>
            <button 
                className="waves-effect waves-light btn-small" 
                style={{margin:10}}                
              >
                Create
              </button>
          </form>
        </div>
        <div className="row"></div>
        <ViewOrderTypes ordertypes={this.state.ordertypes}  disableOrderTypeConfig={this.disableOrderTypeConfig}/>
        
      </div>
    )
  }

}