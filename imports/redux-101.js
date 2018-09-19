import { createStore } from "redux";

//Action Generator
const incrementCount = ({incrementBy = 1} = {}) =>{
  return {
    type : 'INCREMENT',
    incrementBy
  }
}

const decrementCount = ({decrementBy = 1} = {}) =>{
  return {
      type :'DECREMENT',
      decrementBy 
  }
}


const resetCount = ({}) => {
  return {
    type : "RESET",
  }
}

const setCount = ({count = 101} = {}) => {
  return {
    type: "SET",
    count
  }
}

// Reducer

const countReducer = (state = {count : 0}, action) => {
  switch(action.type){
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1 ;
      return {
        count : state.count + incrementBy
      }
    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
    return {
      count : state.count - decrementBy 
    }
    case 'SET':{
      return {
        count : action.count
      }
    }
    case 'RESET':
    return {
      count : 0
    }
    default:  
      return state;
  } 
}


const store = createStore(countReducer)

store.subscribe(()=>{
  console.log(store.getState())
});

// we have unsubscribe

const react101 = "";

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy : 5}));


store.dispatch(decrementCount({decrementBy : 10}));

store.dispatch(decrementCount());


store.dispatch(resetCount({}));

store.dispatch(setCount({count : 103}));

store.dispatch(setCount({count : 407}));




console.log("the last one",store.getState())

export default react101;