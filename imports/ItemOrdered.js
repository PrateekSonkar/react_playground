import React from 'react';

export default class ItemOrdered extends React.Component{
  constructor(props){
    super(props);
    console.log("from ItemOrdered ", this.props.item);
    console.log("from ItemOrdered value", this.props.item.value);
    console.log("from ItemOrdered value item", this.props.item.value.item);
    console.log("from ItemOrdered value rate", this.props.item.value.rate);
    console.log("from ItemOrdered value quantity", this.props.item.value.quantity);
  }

  render(){
    return (
      <tr>
        <th>{this.props.item.value.item}</th>
        <th><button>-1</button> <span>{this.props.item.value.quantity}</span> <button>+1</button> </th>
        <th>{this.props.item.value.quantity * this.props.item.value.rate}</th>
        <th><button>X</button></th>
      </tr>
    )
  }
}