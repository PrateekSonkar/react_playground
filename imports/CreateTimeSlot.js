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
      <div className="container">
        <div className="row">
          <div className="col s12 m3" />
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title center-align"><b>Create Time Slot</b></span>
                <div>
                  <form onSubmit={this.handleOnSubmit} >
                    <div className="input-field">
                      <input type="text" id="timeslotname" name="timeslotname" />
                      <label htmlFor="timeslotname">Time Slot Name</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="timeslotfrom" name="timeslotfrom" />
                      <label htmlFor="timeslotfrom">Time Slot Start</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="timeslotto" name="timeslotto" />
                      <label htmlFor="timeslotto">Time Slot End</label>
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
          <ViewTimeSlots 
            timeslots={this.state.timeslots} 
            toggleTimeSlotStatus={this.toggleTimeSlotStatus } 
            updateState = {this.updateState}
          />
        </div>
      </div>
    )
  }

}