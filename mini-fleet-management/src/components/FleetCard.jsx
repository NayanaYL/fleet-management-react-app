import React from "react";
const FleetCard=React.memo(({fleet,onUpdateDriver,onToggleStatus,onDelete})=>{
    console.log("Rendering card:",fleet.id);
    return(
        <div style={{border:"1px solid black",padding:"10px",width:"200px"}}>
            <img src="https://via.placeholder.com/150" alt="vehicle"/>
            <p><b>Reg No:</b>{fleet.regNo}</p>
            <p><b>Category:</b>{fleet.category}</p>
            <p><b>Driver:</b>{fleet.driver}</p>
            <p><b>Status:</b>{fleet.status}</p>
            <button onClick={()=>onUpdateDriver(fleet.id)}>UpdateDriver</button>
            <button onClick={()=>onToggleStatus(fleet.id)}>ToggleStatus</button>
            <button onClick={()=>onDelete(fleet.id)}>Delete</button>
        </div>
    );
});
export default FleetCard