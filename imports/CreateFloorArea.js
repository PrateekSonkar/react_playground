import React from 'react';


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
    newfloorarea["floorareaname"] = e.target.elements.floorareaname.value;
    newfloorarea["floorareancode"] = e.target.elements.floorareancode.value;    
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
        <div className="row">          
              <table>
                <thead>
                  <tr>
                      <th>Floor Area Name</th>
                      <th>Floor Area Code</th>
                      <th>Action</th>                      
                  </tr>
                </thead>
                <tbody>   
                  {this.state.floorareas.map((floorarea,index) => (
                  <tr key={index}>
                    <td>{floorarea.floorareaname}</td>
                    <td>{floorarea.floorareancode}</td>
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