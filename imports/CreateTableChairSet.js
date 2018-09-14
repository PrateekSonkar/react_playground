import React from 'react';
import _lodash from 'lodash';
import { TableSets } from './api/TableSets';
import ViewTableChairSets from './ViewTableChairSets'

export default class CreateTableChairSet extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      tablechairsets : []
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount(){
    let tablechairsets = TableSets.find().fetch();
    this.setState(prevState => {
      return{
        tablechairsets:tablechairsets
      }
    })
}

  handleOnSubmit = (e) => {
    e.preventDefault();
    let newtcset = {};
    newtcset["tcsetname"] = e.target.elements.tcsetname.value;
    newtcset["tcsettable"] = e.target.elements.tcsettable.value;    
    newtcset["tcsetchairs"] = e.target.elements.tcsetchairs.value;
    newtcset["tccode"] = e.target.elements.tccode.value;
    newtcset["isActive"] = true;
    TableSets.insert(newtcset);
  }

  toggleStatus = (code) => {
    console.log("Disabled toggleStatus: ", code);
    let index = _lodash.findIndex(this.state.tablechairsets,{_id:code});
    if(index > -1){
      let toggledState = !this.state.tablechairsets[index].isActive;
      TableSets.update({_id:code},{$set:{isActive:toggledState}})
      this.setState((prevState) => {
        prevState.tablechairsets[index].isActive = toggledState;
        let obj = Object.assign({},prevState);
        return{
          tablechairsets:obj.tablechairsets
        }
      });
    }
  }

  updateState = (obj) => {
    this.setState((prevState) => {
      return {
        tablechairsets : obj
      }
    });
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 m3" />
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title center-align"><b>Create Table Set</b></span>
                <div>
                  <form onSubmit={this.handleOnSubmit}>
                    <div className="input-field">
                      <input type="text" id="tcsetname" name="tcsetname" />
                      <label htmlFor="tcsetname">Set Name</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="tccode" name="tccode" />
                      <label htmlFor="tccode">Set Code</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="tcsettable" name="tcsettable" />
                      <label htmlFor="tcsettable">No of Table</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="tcsetchairs" name="tcsetchairs" />
                      <label htmlFor="tcsetchairs">No of Chairs</label>
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
          <ViewTableChairSets 
            tablechairsets={this.state.tablechairsets} 
            updateState = {this.updateState}
            toggleStatus = {this.toggleStatus}
          />
        </div>
        
      </div>
    )
  }

}