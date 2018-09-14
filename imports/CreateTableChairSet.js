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
      <div>
        <div className="row">
          <form onSubmit={this.handleOnSubmit} >
            <input type="text" placeholder="Set Name" name="tcsetname"/>
            <input type="text" placeholder="Set Code" name="tccode"/>
            <input type="text" placeholder="No of Table" name="tcsettable"/>
            <input type="text" placeholder="No of Chairs" name="tcsetchairs"/>
            
            <button 
                className="waves-effect waves-light btn-small" 
                style={{margin:10}}                
              >
                Create
              </button>
          </form>
        </div>
        <div className="row"></div>
        <ViewTableChairSets 
          tablechairsets={this.state.tablechairsets} 
          updateState = {this.updateState}
          toggleStatus = {this.toggleStatus}
        />
      </div>
    )
  }

}