import React from 'react';

const ViewOrderTypes = (props) =>{
  return(
    <div className="row">          
      <table>
        <thead>
          <tr>
              <th>Order Type</th>
              <th>Order Type Code</th>
              <th>Action</th>                      
          </tr>
        </thead>
        <tbody>   
          {props.ordertypes.map((ordertype,index) => (
            <tr key={ordertype._id}>
            <td>{ordertype.orderttypename}</td>
            <td>{ordertype.orderttypecode}</td>
            <td>
              <a className="waves-effect waves-light btn">
                <i className="material-icons white-text" onClick={ () => {props.disableOrderTypeConfig(ordertype._id)}} >label_off</i>
              </a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewOrderTypes;