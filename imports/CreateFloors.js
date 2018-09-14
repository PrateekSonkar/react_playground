import React from 'react';
import { Tracker } from 'meteor/tracker'
import _lodash from 'lodash';

import update from 'immutability-helper';

import ViewFloorList from './ViewFloorList';
import { FloorNumbers } from './api/FloorNumbers';


export default class CreateTimeSlotCreateFloorArea extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      floorareas : []
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.disableFloorArea = this.disableFloorArea.bind(this);
    this.updateStateWithNewDoc = this.updateStateWithNewDoc.bind(this);
  }

  componentDidMount(){
    console.log("Component did mount")
    let floor = FloorNumbers.find().fetch();
    console.log("var",floor)
    console.log("direct",FloorNumbers.find().fetch())
    this.setState((prevState) => {
      return {
        floorareas:floor
      }
    });
  }

  componentWillUnmount(){
    const cleanState = {};
    console.log("Component Will Unmount called");
    this.setState(() => (cleanState));
  }

  handleOnSubmit(e){
    e.preventDefault();
    let newfloorarea = {};
    newfloorarea["floorname"] = e.target.elements.floorname.value;
    newfloorarea["floorcode"] = e.target.elements.floorncode.value;    
    newfloorarea["isActive"] = true;
    FloorNumbers.insert(newfloorarea);
  }

  updateFloorStatus = (floorId) =>{
    let index = _lodash.findIndex(this.state.floorareas,{_id:floorId});
    if(index > -1){
      console.log("Before toggle ", this.state.floorareas[index].isActive)
      let toggledState = !this.state.floorareas[index].isActive
      console.log("post toggle ", toggledState);
      FloorNumbers.update({_id:floorId},{$set:{isActive:toggledState}});
      this.setState((prevState) => {
        prevState.floorareas[index].isActive = toggledState;
        let obj = Object.assign({},prevState);
        return {
          floorareas : obj.floorareas
        }
      });
    }
    //
  }

  updateStateWithNewDoc(resultArray){
    console.log("updateStateWithNewDoc", resultArray);
    this.setState((prevState)=>{
      return {
        floorareas:resultArray
      }
    });
  }

  disableFloorArea(code){
    console.log("Disabled disableFloorArea: ", code);

  }



  render(){    
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 m3" />
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title center-align"><b>Create Floor</b></span>
                <div>
                  <form onSubmit={this.handleOnSubmit} >
                    <div className="input-field">
                      <input type="text" id="floorname" name="floorname" />
                      <label htmlFor="floorname">Floor Name</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="floorncode" name="floorncode" />
                      <label htmlFor="floorncode">Floor Code</label>
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
          <ViewFloorList 
            floordetails={this.state.floorareas} 
            updateStateWithNewDoc={this.updateStateWithNewDoc} 
            updateFloorStatus={this.updateFloorStatus} 
          />
        </div>
        
      </div>
    )
  }

}