import React from "react";
import img from "./assets/jeetpic.jpg";
import Textabout from "./Textabout";
function App() {
  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <img style={{width:500,height:500}} src={img} alt="Jeet Patel" />
      
    </div>
    <div 
     style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      
    }}
    
    >
      <Textabout/>
    </div>
    
    </>
    
  );
}

export default App;
