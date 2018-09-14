import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <div>
    <nav className="deep-purple darken-2" >
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li> <NavLink to="/register" activeClassName="active" >Sign Up</NavLink> </li>
          <li> <NavLink to="/configure" activeClassName="active">Configure</NavLink> </li>
          <li> <NavLink to="/createmenu" activeClassName="active">Create Menu</NavLink> </li>
          <li> <NavLink to="/" activeClassName="active" exact={true} >POS</NavLink> </li>
          <li> <NavLink to="/createtax" activeClassName="active" >Create Tax</NavLink> </li>
          <li> <NavLink to="/createuser" activeClassName="active" >Create User</NavLink> </li>
          <li> <NavLink to="/ordertype" activeClassName="active" >Order Type</NavLink> </li>
          <li> <NavLink to="/createfloor" activeClassName="active" >Create Floor</NavLink> </li>
          <li> <NavLink to="/floorarea" activeClassName="active" >Floor Area</NavLink> </li>
          <li> <NavLink to="/timeslot" activeClassName="active" >Time Slot</NavLink> </li>
          <li> <NavLink to="/tcset" activeClassName="active" >Table Set</NavLink> </li>
          <li> <NavLink to="/configurefloor" activeClassName="active" >Configure Floor</NavLink> </li>
        </ul>
      </div>
    </nav>
  </div>
  
)

export default Header;