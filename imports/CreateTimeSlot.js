import React from 'react';
import _lodash from 'lodash';

import { TimeSlots } from './api/TimeSlots';
import ViewTimeSlots from './ViewTimeSlots';

export default class CreateTimeSlot extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      timeslots : []
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.toggleTimeSlotStatus = this.toggleTimeSlotStatus.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount(){
    let timeslots = TimeSlots.find().fetch();
    this.setState(prevState => {
      return{
        timeslots:timeslots
      }
    })
  }

  handleOnSubmit(e){
    e.preventDefault();
    let newtimeslot = {};
    newtimeslot["timeslotname"] = e.target.elements.timeslotname.value;
    newtimeslot["timeslotfrom"] = e.target.elements.timeslotfrom.value;    
    newtimeslot["timeslotto"] = e.target.elements.timeslotto.value;
    newtimeslot["isActive"] = true;
    TimeSlots.insert(newtimeslot);        
  }

  toggleTimeSlotStatus = (code) => {
    console.log("Disabled disableFloorArea: ", code);
    let index = _lodash.findIndex(this.state.timeslots,{_id:code});
    if(index > -1){
      let toggledState = !this.state.timeslots[index].isActive;
      TimeSlots.update({_id:code},{$set:{isActive:toggledState}})
      this.setState((prevState) => {
        prevState.timeslots[index].isActive = toggledState;
        let obj = Object.assign({},prevState);
        return{
          timeslots:obj.timeslots
        }
      });  
    }
  }

  updateState = (obj) => {
    this.setState((prevState) => {
      return {
        timeslots : obj
      }
    });
  }

  render(){
    return(
      <div>
        <div className="row">
          <form onSubmit={this.handleOnSubmit} >
            <input type="text" placeholder="Time Slot Name" name="timeslotname"/>
            <input type="text" placeholder="Time Slot Start" name="timeslotfrom"/>
            <input type="text" placeholder="Time Slot End" name="timeslotto"/>
            <button 
                className="waves-effect waves-light btn-small" 
                style={{margin:10}}                
              >
                Create
              </button>
          </form>
        </div>
        <div className="row"></div>
        <ViewTimeSlots 
          timeslots={this.state.timeslots} 
          toggleTimeSlotStatus={this.toggleTimeSlotStatus } 
          updateState = {this.updateState}
        />
      </div>
    )
  }

}