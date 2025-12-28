import { useState,useCallback } from "react";
import FleetCard from "../components/FleetCard";
const AdminDashboard=()=>{
    const[fleets,setFleets]=useState([]);
    const [form,setForm]=useState({
        regNo:"",
        category:"",
        driver:"",
        status:"Available",
    });
    const handleAddFleet=()=>{
        if (!form.regNo||!form.category||!form.driver){
            alert("All fields Required");
            return;
        }
        setFleets([...fleets,{...form,id:Date.now()}]);
        setForm({regNo:"",category:"",driver:"",status:"Available"});
    };
    const updateDriver=useCallback((id)=>{
        const name=prompt("enter new drivet name");
        if(!name||name.trim()==="")return;
        setFleets((prev)=>
        prev.map((f)=>(f.id===id ?{...f,driver:name}:f)));
    },[]):
    const toggleStatus =useCallback((id)=>{
        setFleets((prev)=>
        prev.map((f)=>
        f.id===id
        ?{...f,status:f.status==="Available"?"Unavailable":"Available"}
    :f
));
    },[]);
    const deleteFleet=useCallback((id)=>{
        if(window.confirm("Are you sure?")){
            setFleets((prev)=>prev.filter((f)=>f.id!==id));

        }
    },[]);
    return(
        <div>
            <h2>Admin Dashboard</h2>
            <div>
                <input
                placeholder="Vehicle Reg No"
                value={form.regNo}
                onChange={(e)=>setForm({...form,regNo:e.target.value})}
                />
                <select 
                value={form.category}
                onChange={(e)=>setForm({...form,category:e.target.value})}
                >
                    <option value="">Select Category</option>
                    <option>Auto</option>
                    <option>Car</option>
                    <option>Truck</option>
                    <option>Bus</option>

                </select>
                <input
                placeholder="Driver Name"
                value={form.driver}
                onChange={(e)=>setForm({...form,driver:e.target.value})}
                />
                <button onClick={handleAddFleet}>Add Fleet</button>

            </div>
            <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
                {fleets.map((fleet)=>(
                    <FleetCard
                    key={fleet.id}
                    fleet={fleet}
                    onUpdateDriver={updateDriver}
                    onToggleStatus={toggleStatus}
                    onDelete={deleteFleet}
                    />
                ))}
            </div>
        </div>
    );
};
export default AdminDashboard;