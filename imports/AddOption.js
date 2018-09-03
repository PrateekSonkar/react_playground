import React from 'react';

export default class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.state = {
      error:undefined
    }
  }

  handleOnSubmit(e){
    e.preventDefault();
    const option = e.target.elements.option.value;
    const error = this.props.handleOption(option);
    this.setState(()=>({error}))
    
  }
  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </ form>
      </div>
    )
  }
}