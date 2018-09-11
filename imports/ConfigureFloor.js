import React from 'react';


export default class ConfigureFloor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      floorplan:[],
      floornumber:"",
      floorarea:"",
      tableset:"",
      quantity:0
    }
    this.handleOnChangeFloor = this.handleOnChangeFloor.bind(this);
    this.handleOnChangeArea = this.handleOnChangeArea.bind(this);
    this.handleOnChangeTableSet = this.handleOnChangeTableSet.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    let elems = document.querySelectorAll("select");
    console.log(elems);
    let instances = M.FormSelect.init(elems);
  }

  handleOnSubmit(e){
    e.preventDefault()
    let newFloorConfig = {}
    newFloorConfig["floornumer"] = this.state.floornumber;
    newFloorConfig["floorarea"] = this.state.floorarea;
    newFloorConfig["tableset"] = this.state.tableset;
    newFloorConfig["quantity"] = e.target.elements.quantity.value;
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

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <div className="input-field col s12">
            <select value="none" onChange={this.handleOnChangeFloor}>
              <option value="none">Choose your option</option>
              <option value="floor1">Floor 1</option>
              <option value="floor2">Floor 2</option>
              <option value="floor3">Floor 3</option>
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
          <input type="text" placeholder="Number Type Code" name="quantity"/>
          <button className="waves-effect waves-light btn">
              Add
          </button>
        </form>
        <div className="row"></div>
        <div className="row">
          <table>
            <thead>
              <tr>
                  <th>Floor</th>
                  <th>Area</th>
                  <th>Table Set</th>
                  <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.floorplan.map((floordetail,index) => (
                <tr key={index}>
                  <td>{floordetail.floorarea}</td>
                  <td>{floordetail.floorarea}</td>
                  <td>{floordetail.tableset}</td>
                  <td>{floordetail.quantity}</td>
                </tr>
              )) }              
            </tbody>
          </table>          
        </div> 
        <div className="row">
          <a className="waves-effect waves-light btn">
              Save Detail
          </a>
        </div>
      </div>
    )
  }
}

