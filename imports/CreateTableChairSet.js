import React from 'react';


export default class CreateTableChairSet extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      tablechairsets : []
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.disableTableChairSet = this.disableTableChairSet.bind(this);
  }

  handleOnSubmit(e){
    e.preventDefault();
    let newtcset = {};
    newtcset["tcsetname"] = e.target.elements.tcsetname.value;
    newtcset["tcsettable"] = e.target.elements.tcsettable.value;    
    newtcset["tcsetchairs"] = e.target.elements.tcsetchairs.value;
    newtcset["tccode"] = e.target.elements.tccode.value;
    console.log(newtcset);
    this.setState((prevState) => {
      return {
        tablechairsets : prevState.tablechairsets.concat([newtcset])
      }
    });
  }

  disableTableChairSet(code){
    console.log("Disabled disableFloorArea: ", code);
  }

  render(){
    return(
      <div>
        <div className="row">
          <form onSubmit={this.handleOnSubmit} >
            <input type="text" placeholder="Set Name" name="tcsetname"/>
            <input type="text" placeholder="Set Code" name="tccode"/>
            <input type="text" placeholder="No of Table" name="tcsettable"/>
            <input type="text" placeholder="No of Chairs" name="tcsetchairs"/>
            
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
                      <th>Set Name</th>
                      <th>Set Code</th>
                      <th>No of Table</th>
                      <th>No of Chairs</th>
                      <th>Action</th>                      
                  </tr>
                </thead>
                <tbody>   
                  {this.state.tablechairsets.map((tablechairset,index) => (
                  <tr key={index}>
                    <td>{tablechairset.tcsetname}</td>
                    <td>{tablechairset.tccode}</td>
                    <td>{tablechairset.tcsettable}</td>
                    <td>{tablechairset.tcsetchairs}</td>
                    <td>
                      <button>
                        <i className="material-icons circle white-text" style={{backgroundColor:"red"}} onClick={this.disableTableChairSet} >label_off</i>
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