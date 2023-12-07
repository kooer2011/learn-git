import React from "react";
import img from "./assets/jeetpic.jpg";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <img style={{width:500,height:500}} src={img} alt="Jeet Patel" />
    </div>
  );
}

export default App;
