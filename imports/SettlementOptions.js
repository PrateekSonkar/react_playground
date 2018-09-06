import React from 'react';

export default class SettlementOptions extends React.Component {
  constructor(props){
    super(props)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(e){
    this.props.updateSettlemtOpted(e.target.getAttribute("value"));
  }

  render(){
    return (
      <label style={{margin:10}}>
        <input name="paymode" type="radio" value={this.props.settlementoption} onClick={this.onClickHandler} />
        <span>{this.props.settlementoption}</span>
      </label>              
    )
  }
}