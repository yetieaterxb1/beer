import React from 'react';



var Beer = (props) => {
    return (
    <>
      <tr id='wrapper'>
        <td>{props.data.name}</td>
        <td>{props.data.abv}</td>
        <td>{props.data.rating}</td>
      </tr>
    </>
    )
  }


export default Beer;