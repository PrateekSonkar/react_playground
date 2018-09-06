import React from 'react';

export default class ItemOrdered extends React.Component{
  constructor(props){
    super(props);
    this.addQuantity = this.addQuantity.bind(this);
    this.removeQuantity = this.removeQuantity.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addQuantity(e){    
    this.props.handleQuantityInc(e.target.getAttribute("value"),e.target.parentElement.parentElement.getAttribute("rel"));
  }

  removeQuantity(e){
    this.props.handleQuantityDec(e.target.getAttribute("value"),e.target.parentElement.parentElement.getAttribute("rel"));
  }

  deleteItem(e){
    this.props.deleteItemFromOrderList(e.target.parentElement.parentElement.getAttribute("rel"));
  }

  render(){
    return (
      <tr rel={this.props.item.value.id}>
        <th>{this.props.item.value.item}</th>
        <th>{this.props.item.value.quantity}</th>
        <th>{this.props.item.value.quantity * this.props.item.value.rate}</th>
        <th>
          <i className="material-icons circle white-text" style={{backgroundColor:"green"}} onClick={this.addQuantity} value={this.props.item.value.quantity}>
            add
          </i>
          <i className="material-icons circle white-text" style={{backgroundColor:"yellow"}} onClick={this.removeQuantity} value={this.props.item.value.quantity} >
            remove
          </i>
          <i className="material-icons circle white-text" style={{backgroundColor:"red"}} onClick={this.deleteItem}>
            delete_forever
          </i>
        </th>
      </tr>
    )
  }
}