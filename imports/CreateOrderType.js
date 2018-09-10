import React from 'react';


export default class CreateOrderType extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      ordertypes : []
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.disableOrderTypeConfig = this.disableOrderTypeConfig.bind(this);
  }

  handleOnSubmit(e){
    e.preventDefault();
    console.log(e.target.elements.taxname);
    let neworderttypeRate = {};
    neworderttypeRate["orderttypename"] = e.target.elements.orderttypename.value;
    neworderttypeRate["orderttypecode"] = e.target.elements.orderttypecode.value;    
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
        <div className="row">          
              <table>
                <thead>
                  <tr>
                      <th>Order Type</th>
                      <th>Order Type Code</th>
                      <th>Action</th>                      
                  </tr>
                </thead>
                <tbody>   
                  {this.state.ordertypes.map((ordertype,index) => (
                  <tr key={index}>
                    <td>{ordertype.orderttypename}</td>
                    <td>{ordertype.orderttypecode}</td>
                    <td>
                      <button>
                        <i className="material-icons circle white-text" style={{backgroundColor:"red"}} onClick={this.disableOrderTypeConfig} >label_off</i>
                      </button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
      </div>
    )
  }

}