import React from 'react';
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
    FloorNumbers.insert(newfloorarea,function(err,doc){
      if(!err){
        console.log("saved floor", doc);
        newfloorarea["_id"] = doc;        
      }
    });
    // this.setState((prevState) => {
    //   return {
    //     floorareas : prevState.floorareas.concat([newfloorarea])
    //   }
    // });
    // console.log(newfloorarea);    
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
        this.updateStateWithNewDoc(obj.floorareas);
        // return {
        //   floorareas : obj.floorareas
        // }
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
      <div>
        <div className="row">
          <form onSubmit={this.handleOnSubmit} >
            <input type="text" placeholder="Floor Name" name="floorname"/>
            <input type="text" placeholder="Floor Code" name="floorncode"/>
            <button 
                className="waves-effect waves-light btn-small" 
                style={{margin:10}}                
              >
                Create
              </button>
          </form>
        </div>
        <div className="row"></div>
        {this.state.floorareas.length > 0 && <ViewFloorList floordetails={this.state.floorareas} updateStateWithNewDoc={this.updateStateWithNewDoc} updateFloorStatus={this.updateFloorStatus} />}        
      </div>
    )
  }

}