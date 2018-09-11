import React from 'react';

export default class CreateMenu extends React.Component {
  constructor(props){
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.state = {
      error:undefined,
      taxrate : 0
    }
  }

  componentDidMount() {
    let elems = document.querySelectorAll("select");
    console.log(elems);
    let instance = M.FormSelect.init(elems);
  }

  handleOnChange(e){
    let value = e.target.value;
    console.log("andle On change ", value);
    // this.setState((prevState) => {
    //   return{
    //     "taxrate":value
    //   }
    // })
  }

  handleOnClick(e){
    e.preventDefault();
    let checkedBoxes = document.querySelectorAll('input[name=tax]:checked');
    console.log(checkedBoxes);
    console.log(checkedBoxes[0].value);
    console.log(checkedBoxes[0].attributes.rel.value);
    
  }

  handleOnSubmit(e){
    e.preventDefault();
    let menuItem = {};
    menuItem["group"] = e.target.elements.group.value;
    menuItem["subgroup"] = e.target.elements.subgroup.value;
    menuItem["category"] = e.target.elements.category.value;
    menuItem["subcategory"] = e.target.elements.subcategory.value;
    menuItem["itemname"] = e.target.elements.itemname.value;
    menuItem["menurate"] = e.target.elements.menurate.value;
    menuItem["tax"] = [];
    let checkedBoxes = document.querySelectorAll('input[name=tax]:checked');
    checkedBoxes.forEach(function(nodeElem,index){
      let key = nodeElem.attributes.rel.value
      let value = nodeElem.value;
      let temp = {};
      temp[key] = value
      console.log("from loop ", key, value);
      menuItem["tax"].push(temp)
    });    
    console.log(menuItem);
  }
  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="group" placeholder="Group"/>
          <input type="text" name="subgroup" placeholder="Sub Group"/>
          <input type="text" name="category" placeholder="Category"/>
          <input type="text" name="subcategory" placeholder="Sub Category"/>
          <input type="text" name="itemname" placeholder="Item Name"/>
          <input type="text" name="menurate" placeholder="Menu Rate"/>
          <div className="row" >
            <div>
              <label>
                <input type="checkbox" name="tax" value={2} rel="CGST"/>
                <span>Red</span>
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" name="tax" value={5} rel="SGST"/>
                <span>Yellow</span>
              </label>
            </div>
          </div>
          
          <button className="waves-effect waves-light btn">Add Option</button>
        </ form>
        
      </div>
    )
  }
}