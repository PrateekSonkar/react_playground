import React from 'react';
import _lodash from 'lodash';
import {FloorConfigurations} from './api/FloorConfigurations';
import ViewFloorConfigurations from './ViewFloorConfigurations';

export default class ConfigureFloor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      floorplan:[],
      floornumber:"none",
      floorarea:"none",
      tableset:"none",
      quantity:0,
      flooroptions:[],
      areaoptions:[],
      tablesetoptions:[]
    }
    this.handleOnChangeFloor = this.handleOnChangeFloor.bind(this);
    this.handleOnChangeArea = this.handleOnChangeArea.bind(this);
    this.handleOnChangeTableSet = this.handleOnChangeTableSet.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateDropDown = this.updateDropDown.bind(this);
    this.initializeDropDown = this.initializeDropDown.bind(this);
  }

  componentDidMount() {
    this.initializeDropDown();
    let floorconfig = FloorConfigurations.find().fetch();
    this.setState(prevState => {
      return {
        floorplan : floorconfig
      }
    });
  }

  initializeDropDown(){
    let elems = document.querySelectorAll("select");
    let instances = M.FormSelect.init(elems);
  }

  handleOnSubmit(e){
    e.preventDefault()
    let newFloorConfig = {}
    newFloorConfig["floornumer"] = this.state.floornumber;
    newFloorConfig["floorarea"] = this.state.floorarea;
    newFloorConfig["tableset"] = this.state.tableset;
    newFloorConfig["count"] = e.target.elements.count.value;
    newFloorConfig["isActive"] = true;
    FloorConfigurations.insert(newFloorConfig);
    console.log("handle Submit ", newFloorConfig);
    this.setState((prevState) => {
      return{
        floorplan:prevState.floorplan.concat([newFloorConfig])
      }
    })
    
  }

  handleOnChangeFloor(e){
    console.log("handle on change ",e.target.value)
    let value = e.target.value;
    this.setState((prevState) => ({floornumber:value}))
  }

  handleOnChangeArea(e){
    console.log("handle on change ",e.target.value)
    let value = e.target.value;
    this.setState((prevState) => ({floorarea:value}))
  }

  handleOnChangeTableSet(e){
    console.log("handle on change ",e.target.value)
    let value = e.target.value;
    this.setState((prevState) => ({tableset:value}))
  }

  toggleStatus = (code) => {
    console.log("Disabled disableFloorArea: ", code);
    let index = _lodash.findIndex(this.state.floorplan,{_id:code});
    if(index > -1){
      let toggledState = !this.state.floorplan[index].isActive;
      FloorConfigurations.update({_id:code},{$set:{isActive:toggledState}})
      this.setState((prevState) => {
        prevState.floorplan[index].isActive = toggledState;
        let obj = Object.assign({},prevState);
        return{
          floorplan:obj.floorplan
        }
      });  
    }
  }

  updateState = (obj) => {
    this.setState((prevState) => {
      return {
        floorplan : obj
      }
    });
  }

  updateDropDown = (obj) => {
    this.setState((prevState) => {
      return {
        flooroptions:obj.flooroptions,
        areaoptions:obj.areaoptions,
        tablesetoptions:obj.tablesetoptions
      }
    },()=>{this.initializeDropDown});
  }

  componentDidUpdate(){
    this.initializeDropDown();
  }

  render(){
    return(
      <div className="container">
        <div className="row">
            <div className="col s12 m3" />
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                  <span className="card-title center-align"><b>Configure Floor</b></span>
                  <div>
                    <form onSubmit={this.handleOnSubmit} >
                      <div className="input-field">
                        <input type="text" id="count" name="count" />
                        <label htmlFor="count">Count</label>
                      </div>
                      <div className="input-field col s12">
                        <select value={this.state.floornumber} onChange={this.handleOnChangeFloor}>
                          <option value="none">Choose your option</option>
                          {this.state.flooroptions.map((flooroption) =>(
                            <option key={flooroption._id} value={flooroption.floorcode}>{flooroption.floorname}</option>
                          ))}
                        </select>
                        <label>Select Floor to Configure</label>
                      </div>
                      <div className="input-field col s12">
                        <select value={this.state.floorarea} onChange={this.handleOnChangeArea}>
                          <option value="none" disabled >Choose your option</option>
                          {this.state.areaoptions.map((areaoption) =>(
                            <option key={areaoption._id} value={areaoption.floorareancode}>{areaoption.floorareaname}</option>
                          ))}
                        </select>
                        <label>Select Area to Configure</label>
                      </div>        
                      <div className="input-field col s12">
                        <select value={this.state.tableset} onChange={this.handleOnChangeTableSet}>
                          <option value="none" >Choose your option</option>
                          {this.state.tablesetoptions.map((tablesetoption) =>(
                            <option key={tablesetoption._id} value={tablesetoption.tccode}>{tablesetoption.tcsetname}</option>
                          ))}
                        </select>
                        <label>Select TableSet to Configure</label>
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
          <div className="row"></div>
          <div className="row">
            <ViewFloorConfigurations 
              floorplan = {this.state.floorplan}
              updateState = {this.updateState}
              toggledState = {this.toggleStatus}
              flooroptions = {this.state.flooroptions}
              areaoptions = {this.state.areaoptions}
              tablesetoptions = {this.state.tablesetoptions}
              updateDropDown = {this.updateDropDown}
            />
          </div>
        </div>
      </div>
    )
  }
}

