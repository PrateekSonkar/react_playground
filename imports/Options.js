import React from 'react';

export const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions} >Remove All</button>
      {props.optionspasses.map((inoption) => <OneOption key={inoption} text={inoption} />)}
    </div>
  );
}

export const OneOption = (props) => {
  return(
    <p>{props.text}</p>
  );
}