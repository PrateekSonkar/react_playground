import React from 'react';
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
      }
    });
    console.log(newfloorarea);
    this.setState((prevState) => {
      return {
        floorareas : prevState.floorareas.concat([newfloorarea])
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
        <div className="row">          
              <table>
                <thead>
                  <tr>
                      <th>Floor Name</th>
                      <th>Floor Code</th>
                      <th>Action</th>                      
                  </tr>
                </thead>
                <tbody>   
                  {this.state.floorareas.map((floorarea,index) => (
                  <tr key={index}>
                    <td>{floorarea.floorname}</td>
                    <td>{floorarea.floorcode}</td>
                    <td>
                      <button>
                        <i className="material-icons circle white-text" style={{backgroundColor:"red"}} onClick={this.disableFloorArea} >label_off</i>
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