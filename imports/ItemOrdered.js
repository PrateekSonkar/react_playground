import React from 'react';

export default class ItemOrdered extends React.Component{
  constructor(props){
    super(props);
    this.addQuantity = this.addQuantity.bind(this)
    
  }

  addQuantity(e){
    console.log(e.target.getAttribute("value"))
    console.log(e.target.parentElement.parentElement.getAttribute("rel"));
    this.props.handleQuantityInc(e.target.getAttribute("value"),e.target.parentElement.parentElement.getAttribute("rel"));
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
          <i className="material-icons circle white-text" style={{backgroundColor:"yellow"}} value={this.props.item.value.quantity} >
            remove
          </i>
          <i className="material-icons circle white-text" style={{backgroundColor:"red"}}>
            delete_forever
          </i>
        </th>
      </tr>
    )
  }
}