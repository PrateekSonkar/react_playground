import React from 'react';

export default class TaxRow extends React.Component{
  constructor(props){
    super(props);
    this.disableTax = this.disableTax.bind(this);
  }

  disableTax(e){
    console.log(e.target.getAttribute("rel"));
    this.props.disableTax(e.target.getAttribute("rel"));
  }

  render(){
    return(
      <tr>
        <th>{this.props.taxname}</th>
        <th>{this.props.taxcode}</th>
        <th>{this.props.taxpercentage}</th>
        <th>
          <button>
            <i className="material-icons circle white-text" style={{backgroundColor:"red"}} onClick={this.disableTax} rel={this.props.taxcode}>
              label_off
            </i>
          </button>
        </th>                      
      </tr>
    )
  }
}