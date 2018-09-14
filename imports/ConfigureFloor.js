import React from 'react';
import _lodash from 'lodash';
import {FloorConfigurations} from './api/FloorConfigurations';
import ViewFloorConfigurations from './ViewFloorConfigurations';

export default class ConfigureFloor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      floorplan:[],
      floornumber:"",
      floorarea:"",
      tableset:"",
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

  // componentWillMount(){
  //   let floornumber = FloorNumbers.find().fetch();
  //   console.log("will mount",floornumber)
  //   this.setState((prevState) => {
  //     return{
  //       flooroptions:floornumber
  //     }
  //   })
  // }

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
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <div className="input-field col s12">
            <select value="none" onChange={this.handleOnChangeFloor}>
              <option value="none">Choose your option</option>
              <option value="floor2">F Floor 2</option>
              <option value="floor3">F Floor 3</option>
            </select>
            <label>Select Floor to Configure</label>
          </div>
          <div className="input-field col s12">
            <select value="none" onChange={this.handleOnChangeArea}>
              <option value="none" disabled >Choose your option</option>
              <option value="bar">Bar</option>
              <option value="smoking">Smoking</option>
              <option value="nonsmoking">Non Smoking</option>
              <option value="family">Family</option>
            </select>
            <label>Select Area to Configure</label>
          </div>        
          <div className="input-field col s12">
            <select value="none" onChange={this.handleOnChangeTableSet}>
              <option value="none" >Choose your option</option>
              <option value="tc2">Table & 2 Chair</option>
              <option value="tc4">Table & 4 Chair</option>
              <option value="tc6">Table & 6 Chair</option>
            </select>
            <label>Select TableSet to Configure</label>
          </div>
          <input type="text" placeholder="Number Type Code" name="count"/>
          <button className="waves-effect waves-light btn">
              Add
          </button>
        </form>
        <div className="row"></div>
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
    )
  }
}

