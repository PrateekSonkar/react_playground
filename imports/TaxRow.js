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
          <a className="waves-effect waves-light btn" onClick={()=>{this.props.disableTax(this.props.rel)}}>
          <i className="material-icons white-text left">{this.props.taxstatus ? "label" : "label_off"}</i>
            {this.props.taxstatus ? "Disable" : "Enable"}
          </a>
        </th>                      
      </tr>
    )
  }
}