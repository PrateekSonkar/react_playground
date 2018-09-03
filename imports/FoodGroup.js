import React from 'react';

const FoodGroup = (props) => {
  return(
    <a className="waves-effect waves-light btn-large" style={{margin:10}}>{props.foodgroup}</a>
  );
}

export default FoodGroup;