import React, { useState } from "react";

function Offon() {
  let [off, setOn] = useState(true);

  return (
    <div>
      <h1  onClick={() => {  setOn(!off); }} >{off ? "OFF" : "ON"}</h1>
       
     
      <h1
        onClick={() => {
          setOn(off);
        }}
      >
        {off ? "ON" : "OFF"}
      </h1>
    </div>
  );
}

export default Offon;
