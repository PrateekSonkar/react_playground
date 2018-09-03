import React from 'react';

export default class POSView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error:undefined,
      billno : 9
    }
  }

  render(){
    return(
      <div className="row">
        <div className="col s8">
          <div className="row">
            <div className="col s3">
              <a className="waves-effect waves-light btn-large" style={{margin:10}}>Button 1</a>
              <a className="waves-effect waves-light btn-large" style={{margin:10}}>Button 2</a>
              <a className="waves-effect waves-light btn-large" style={{margin:10}}>Button 3</a>
              <a className="waves-effect waves-light btn-large" style={{margin:10}}>Button 4</a>
              <a className="waves-effect waves-light btn-large" style={{margin:10}}>Button 5</a>
              <a className="waves-effect waves-light btn-large" style={{margin:10}}>Button 6</a>
              <a className="waves-effect waves-light btn-large" style={{margin:10}}>Button 7</a>
              <a className="waves-effect waves-light btn-large" style={{margin:10}}>Button 8</a>
            </div>
            <div className="col s9">
              <a className="waves-effect waves-light btn-large" style={{margin:20}}>L Button hkjah saj khaskh aksh2</a>
              <a className="waves-effect waves-light btn-large" style={{margin:20}} >L Button 2</a>
              <a className="waves-effect waves-light btn-large" style={{margin:20}} >L Button 3</a>
              <a className="waves-effect waves-light btn-large" style={{margin:20}}>L Button 4</a>
              <a className="waves-effect waves-light btn-large" style={{margin:20}}>L Button 5</a>
              <a className="waves-effect waves-light btn-large" style={{margin:20}}>L Button 6</a>
              <a className="waves-effect waves-light btn-large" style={{margin:20}} >L Button 7</a>
              <a className="waves-effect waves-light btn-large" style={{margin:20}}>L Button 8</a>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="row" >
            <label style={{margin:15}}>
              <input name="group1" type="radio"  />
              <span>Dine In</span>
            </label>              
            <label style={{margin:15}}>
              <input name="group1" type="radio"  />
              <span>Pick Up</span>
            </label>              
            <label style={{margin:15}}>
              <input name="group1" type="radio"  />
              <span>Take Away</span>
            </label>              
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
                    <th>Tax</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row right-align">
            Total : {this.state.billno}
          </div>
          <div className="row">
            <div>Payment Mode</div>
            <div>
              <label style={{margin:10}}>
                <input name="paymode" type="radio"  />
                <span>Cash</span>
              </label>              
              <label style={{margin:10}}>
                <input name="paymode" type="radio"  />
                <span>Card</span>
              </label>                              
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
    )
  }
}