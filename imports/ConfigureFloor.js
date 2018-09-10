import React from 'react';


export default class ConfigureFloor extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }

  }

  handleOnSubmit(e){

  }

  render(){
    return(
      <div>
        <div class="input-field col s12">
          <select value="none">
            <option value="none" disabled>Choose your option</option>
            <option value="floor1">Floor 1</option>
            <option value="floor2">Floor 2</option>
            <option value="floor3">Floor 3</option>
          </select>
          <label>Select Floor to Configure</label>
        </div>
        <div class="input-field col s12">
          <select value="none">
            <option value="none" disabled>Choose your option</option>
            <option value="floor1">Floor 1</option>
            <option value="floor2">Floor 2</option>
            <option value="floor3">Floor 3</option>
          </select>
          <label>Select Area to Configure</label>
        </div>
        <div class="input-field col s12">
          <select value="none">
            <option value="none" disabled>Choose your option</option>
            <option value="floor1">Floor 1</option>
            <option value="floor2">Floor 2</option>
            <option value="floor3">Floor 3</option>
          </select>
          <label>Select TableSet to Configure</label>
        </div>
        <input type="text" placeholder="Number Type Code" name="orderttypecode"/>
      </div>
    )
  }
}

