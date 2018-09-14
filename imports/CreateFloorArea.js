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
      <div className="container">
        <div className="row">
          <div className="col s12 m3" />
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title center-align"><b>Create Floor Area</b></span>
                <div>
                  <form onSubmit={this.handleOnSubmit} >
                    <div className="input-field">
                      <input type="text" id="floorareaname" name="floorareaname" />
                      <label htmlFor="floorareaname">Floor Area Name</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="floorareancode" name="floorareancode" />
                      <label htmlFor="floorareancode">Floor Area Code</label>
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
          <ViewFloorAreas 
            floorareas={this.state.floorareas} 
            disableFloorArea={this.disableFloorArea} 
            updateStateWithNewDoc={this.updateStateWithNewDoc} 
          />       
        </div> 
        
      </div>
    )
  }

}