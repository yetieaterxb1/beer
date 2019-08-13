import React from 'react';

var Beer = (props) => {
    return (
    <>
      <div>
        <div class='one'>{props.data.name}</div>
        <div class='two'>{props.data.abv}</div>
        <div class='three'>{props.data.rating}</div>
      </div>
    </>
    )
  }


export default Beer;