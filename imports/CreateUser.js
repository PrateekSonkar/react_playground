import React from 'react';
import {Employees} from './api/EmployeesDetails';

export default class CreateUser extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      role:""
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount() {
    console.log("component did mount");
    let elems = document.querySelectorAll("select");
    console.log(elems);
    let instances = M.FormSelect.init(elems);
  }

  handleOnSubmit(e){
    e.preventDefault();    
    let newUser = {};
    newUser["employeename"] = e.target.elements.employeename.value;
    newUser["employeecode"] = e.target.elements.employeecode.value;
    newUser["employeerole"] = this.state.role; 
    newUser["isActive"] = true;
    Employees.insert(newUser);
    console.log("New User Object : ", newUser);
  }

  handleOnChange(e){
    let role = e.target.value;
    console.log(role);
    this.setState((prevState) => {
      return {
        role:role
      }
    })
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 m3" />
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title center-align"><b>Create User</b></span>
                <div>
                <form onSubmit={this.handleOnSubmit} >
                  <div className="input-field">
                    <input type="text" id="employeename" name="employeename" />
                    <label htmlFor="employeename">Employee Name</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="employeecode" name="employeecode" />
                    <label htmlFor="employeecode">Employee Code</label>
                  </div>
                  <div className="input-field col s12">
                    <select onChange={this.handleOnChange} defaultValue="none" >
                      <option value="none" disabled>Choose Employee Role</option>
                      <option value="admin">Admin</option>
                      <option value="cashier">Cashier</option>
                      <option value="chef">Chef</option>
                      <option value="steward">Steward</option>
                    </select>
                    <label>Select Role</label>
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
      </div>
    )
  }

}