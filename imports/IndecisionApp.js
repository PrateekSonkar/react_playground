import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import {Options,OneOption} from './Options'
import NewCustomerRegistration from './NewCustomerRegistration';
import CreateMenu from './CreateMenu';
import ConfigureRestaurant from './ConfigureRestaurant';
import POSView from './POSView';


export default class IndecisionApp extends React.Component {    
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.pickOptions = this.pickOptions.bind(this);
    this.handleOption = this.handleOption.bind(this);
    this.state = {
      options : [],
      itemviewfilter : {
        group:undefined,
        subcategory:undefined
      },
      staticmenu : [{"id":"F1","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"NON VEG","item":"CHICKEN CHIMICHANGA","rate":1000.00,"tax":5},
      {"id":"F2","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"NON VEG","item":"GLAZED CHICKEN SKEWERS","rate":1000.00,"tax":5},
      {"id":"F3","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"NON VEG","item":"CHICKEN POPCORN","rate":1000.00,"tax":5},
      {"id":"F4","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"SEA FOOD","item":"PANKO PRAWNS","rate":1500.00,"tax":5},
      {"id":"F5","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"SEA FOOD","item":"FISH FINGER","rate":1000.00,"tax":5},
      {"id":"F6","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"VEG","item":"ASSORTED BRUSCHETTA","rate":600.00,"tax":5},
      {"id":"F7","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"VEG","item":"CHEESE CHILLI TOST","rate":600.00,"tax":5},
      {"id":"F8","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"VEG","item":"MUSHROOM DUPLEX","rate":800.00,"tax":5},
      {"id":"F9","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"VEG","item":"NACHOS WITH SALSA","rate":600.00,"tax":5},
      {"id":"F10","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"VEG","item":"COTTAGE CHEESE SHASHLIK","rate":800.00,"tax":5},
      {"id":"F11","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"NON VEG","item":"ORIENTEL CHILLI CHICKEN","rate":1000.00,"tax":5},
      {"id":"F12","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"NON VEG","item":"CHICKEN LOLIPOP","rate":1000.00,"tax":5},
      {"id":"F13","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"NON VEG","item":"CHICKEN DIMSUM","rate":1000.00,"tax":5},
      {"id":"F14","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"NON VEG","item":"ROAR FIREY CHICKEN","rate":1200.00,"tax":5},
      {"id":"F15","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"SEA FOOD","item":"CHILLI GARLIC PRAWN","rate":1500.00,"tax":5},
      {"id":"F16","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"VEG","item":"VEG SALT N PEPPER","rate":800.00,"tax":5},
      {"id":"F17","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"VEG","item":"HONEY CHILLI POTATOS","rate":800.00,"tax":5},
      {"id":"F18","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"VEG","item":"CHILLI PANEER","rate":800.00,"tax":5},
      {"id":"F19","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"VEG","item":"VEG DIMSUM","rate":800.00,"tax":5},
      {"id":"F20","group":"FOOD","subgroup":"APPETIZERS","category":"CHINESE","subcategory":"VEG","item":"VEG SPRING ROLL","rate":800.00,"tax":5},
      {"id":"F21","group":"FOOD","subgroup":"APPETIZERS","category":"CONTINENTAL","subcategory":"VEG","item":"VEG FALAL ROLL","rate":1000.00,"tax":5},
      {"id":"F22","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"NON VEG","item":"MURG MALAI TIKKA","rate":1000.00,"tax":5},
      {"id":"F23","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"NON VEG","item":"TANDOORI JHINGA","rate":1500.00,"tax":5},
      {"id":"F24","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"NON VEG","item":"LUCKNOWI CHICKEN TIKKA(6PCS)","rate":1000.00,"tax":5},
      {"id":"F25","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"NON VEG","item":"MUTTON SEEKH GILAFI","rate":1000.00,"tax":5},
      {"id":"F26","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"SEA FOOD","item":"AJAWANI FISH TIKKA","rate":1000.00,"tax":5},
      {"id":"F27","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"VEG","item":"KUMBH BEMISAL","rate":800.00,"tax":5},
      {"id":"F28","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"VEG","item":"TANDOORI SOYA CHAP","rate":800.00,"tax":5},
      {"id":"F29","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"VEG","item":"ACHARI PANEER TIKKA","rate":800.00,"tax":5},
      {"id":"F30","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"VEG","item":"DAHI PAPAD KE KEBAB","rate":800.00,"tax":5},
      {"id":"F31","group":"FOOD","subgroup":"APPETIZERS","category":"INDIAN","subcategory":"VEG","item":"TANDOORI KANCHE ALOO","rate":800.00,"tax":5},
      {"id":"F32","group":"FOOD","subgroup":"PASTA","category":"PIZZA & PASTA","subcategory":"NON VEG","item":"PENNE CHICKEN PASTA","rate":1200.00,"tax":5},
      {"id":"F33","group":"FOOD","subgroup":"PASTA","category":"PIZZA & PASTA","subcategory":"VEG","item":"PENNE PASTA","rate":1000.00,"tax":5},
      {"id":"F34","group":"FOOD","subgroup":"PIZZA","category":"PIZZA & PASTA","subcategory":"NON VEG","item":"CHICKEN TIKKA PIZZA","rate":1200.00,"tax":5},
      {"id":"F35","group":"FOOD","subgroup":"PIZZA","category":"PIZZA & PASTA","subcategory":"VEG","item":"PIZZA MARGARITA","rate":1000.00,"tax":5},
      {"id":"F36","group":"FOOD","subgroup":"SALAD","category":"SALADS","subcategory":"NON VEG","item":"CHICKEN CAESER SALAD","rate":800.00,"tax":5},
      {"id":"F37","group":"FOOD","subgroup":"SALAD","category":"SALADS","subcategory":"NON VEG","item":"BBQ CHICKEN SALAD","rate":800.00,"tax":5},
      {"id":"F38","group":"FOOD","subgroup":"SALAD","category":"SALADS","subcategory":"VEG","item":"CAESER SALAD","rate":600.00,"tax":5},
      {"id":"F39","group":"FOOD","subgroup":"SALAD","category":"SALADS","subcategory":"VEG","item":"GREEN FETA SALAD","rate":600.00,"tax":5},
      {"id":"F40","group":"TOBACCO","subgroup":"SALAD","category":"SALADS","subcategory":"VEG","item":"BIDI","rate":600.00,"tax":5},
      {"id":"F41","group":"LIQUOR","subgroup":"SALAD","category":"SALADS","subcategory":"VEG","item":"BEER","rate":600.00,"tax":5},
    ]
    }
  }

  handleDeleteOptions(){
    this.setState(()=>({options:[]}));
  }

  pickOptions(){
    const randNumber = Math.floor(Math.random() * this.state.options.length);
    const selectedOptions = this.state.options[randNumber];
    alert(selectedOptions)
  }

  handleOption(option){   
    if(!option){
      return 'Enter valid value';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }  
    this.setState((prevState)=>({options : prevState.options.concat([option])}));
  }

  render () {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of Computer";
    const optionsArr = ["Things One","Things Two","Things Three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions = {this.state.options.length > 0}
          pickOptions = {this.pickOptions}
        />
        <Options 
          optionspasses={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleOption = {this.handleOption}
        />          
        {/*First Form to registerer new clients
        */}
        <h5>Register Restaurant</h5>
        <NewCustomerRegistration />
        {/*First Screen post email & mobile confirmation
        */}
        <h5>Configure Restaurant</h5>
        <ConfigureRestaurant />
        {/* restaurant will now configure menu
        */}
        <h5>Create Menu</h5>
        <CreateMenu />
        <h5>POS View</h5>
        <POSView foodMenu={this.state.staticmenu} />
      </div>
    );
  }
}