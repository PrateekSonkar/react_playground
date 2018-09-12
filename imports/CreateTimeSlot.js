import React from 'react';
import { TimeSlots } from './api/TimeSlots'

export default class CreateTimeSlot extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      timeslots : []
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.disableTimeSlot = this.disableTimeSlot.bind(this);
  }

  handleOnSubmit(e){
    e.preventDefault();
    let newtimeslot = {};
    newtimeslot["timeslotname"] = e.target.elements.timeslotname.value;
    newtimeslot["timeslotfrom"] = e.target.elements.timeslotfrom.value;    
    newtimeslot["timeslotto"] = e.target.elements.timeslotto.value;
    newtimeslot["isActive"] - true;
    TimeSlots.insert(newtimeslot);    
    console.log(newtimeslot);
    this.setState((prevState) => {
      return {
        timeslots : prevState.timeslots.concat([newtimeslot])
      }
    });
  }

  disableTimeSlot(code){
    console.log("Disabled disableFloorArea: ", code);
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
        <div className="row">          
              <table>
                <thead>
                  <tr>
                      <th>Time Slot Name</th>
                      <th>Time Slot Starts</th>
                      <th>Time Slot Ends</th>
                      <th>Action</th>                      
                  </tr>
                </thead>
                <tbody>   
                  {this.state.timeslots.map((timeslot,index) => (
                  <tr key={index}>
                    <td>{timeslot.timeslotname}</td>
                    <td>{timeslot.timeslotfrom}</td>
                    <td>{timeslot.timeslotto}</td>
                    <td>
                      <button>
                        <i className="material-icons circle white-text" style={{backgroundColor:"red"}} onClick={this.disableTimeSlot} >label_off</i>
                      </button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
      </div>
    )
  }

}