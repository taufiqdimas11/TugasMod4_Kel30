import React from "react";
export function Content(props) {


  return (
    <div className="modal">
      <div className="header" style={{}}> {props.nama} </div>
      <div className="content">
        <p>{props.info}</p>
      </div>
    </div>
  )
}

