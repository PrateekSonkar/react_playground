import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import IndecisionApp from '../imports/IndecisionApp';
import NewCustomerRegistration from '../imports/NewCustomerRegistration';
import ConfigureRestaurant from '../imports/ConfigureRestaurant';
import CreateMenu from '../imports/CreateMenu';
import POSView from '../imports/POSView';
import NotFoundPage from '../imports/NotFoundPage';
import Header from '../imports/Header';
import CreateTax from '../imports/CreateTax';
import CreateUser from '../imports/CreateUser';
import CreateOrderType from '../imports/CreateOrderType';
import CreateFloorArea from '../imports/CreateFloorArea';
import CreateTimeSlot from '../imports/CreateTimeSlot';
import CreateTableChairSet from '../imports/CreateTableChairSet';


const AppRouter = () => {
  return(
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={IndecisionApp} exact={true} />
        <Route path="/register" component={NewCustomerRegistration}  />
        <Route path="/configure" component={ConfigureRestaurant} />
        <Route path="/createmenu" component={CreateMenu} />
        <Route path="/pos" component={POSView} />
        <Route path="/createtax" component={CreateTax} />
        <Route path="/createuser" component={CreateUser} />
        <Route path="/ordertype" component={CreateOrderType} />
        <Route path="/floorarea"  component={CreateFloorArea} />
        <Route path="/timeslot"  component={CreateTimeSlot} />
        <Route path="/tcset"  component={CreateTableChairSet} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
    
  </BrowserRouter>
  )
}

export default AppRouter;