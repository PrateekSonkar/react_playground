import React from 'react';
import _lodash from 'lodash';
import { FloorAreas } from './api/FloorAreas';
import ViewFloorAreas from './ViewFloorAreas';


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
    let floorareas = FloorAreas.find().fetch();
    this.setState((prevState) => {
      return {
        floorareas:floorareas
      }
    });
  }

  handleOnSubmit(e){
    e.preventDefault();
    let newfloorarea = {};
    newfloorarea["floorareaname"] = e.target.elements.floorareaname.value;
    newfloorarea["floorareancode"] = e.target.elements.floorareancode.value;    
    newfloorarea["isActive"] = true;
    FloorAreas.insert(newfloorarea);
  }

  disableFloorArea = (code) => {
    console.log("Disabled disableFloorArea: ", code);
    let index = _lodash.findIndex(this.state.floorareas,{_id:code});
    if(index > -1){
      let toggledState = !this.state.floorareas[index].isActive;
      FloorAreas.update({_id:code},{$set:{isActive:toggledState}});
      this.setState((prevState) => {
        prevState.floorareas[index].isActive = toggledState;
        let obj = Object.assign({},prevState);
        return{
          floorareas:obj.floorareas
        }
      });  
    }
  }

  updateStateWithNewDoc = (floorareas) => {
    this.setState(prevState => {
      return{
        floorareas:floorareas
      }
    });
  }

  render(){
    return(
      <div>
        <div className="row">
          <form onSubmit={this.handleOnSubmit} >
            <input type="text" placeholder="Floor Area Name" name="floorareaname"/>
            <input type="text" placeholder="Floor Area Code" name="floorareancode"/>
            <button 
                className="waves-effect waves-light btn-small" 
                style={{margin:10}}                
              >
                Create
              </button>
          </form>
        </div>
        <div className="row"></div> 
        <ViewFloorAreas floorareas={this.state.floorareas} disableFloorArea={this.disableFloorArea} updateStateWithNewDoc={this.updateStateWithNewDoc} />       
      </div>
    )
  }

}