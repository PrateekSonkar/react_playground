import React from 'react';

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
      <div>
        <div className="row">
          <form onSubmit={this.handleOnSubmit} >
            <input type="text" placeholder="Employee Name" name="employeename"/>
            <input type="text" placeholder="Employee Code" name="employeecode" />
            <div className="input-field col s12">
              <select onChange={this.handleOnChange} defaultValue="none" >
                <option value="none" disabled>Choose Employee Role</option>
                <option value="admin">Admin</option>
                <option value="cashier">Cashier</option>
                <option value="chef">Chef</option>
                <option value="steward">Steward</option>
              </select>
              <label>Materialize Select</label>
            </div>
            <button 
                className="waves-effect waves-light btn-small" 
                style={{margin:10}}                
              >
                Create
              </button>
          </form>
        </div>        
      </div>
    )
  }

}