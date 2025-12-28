import { useState,useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login=({setIsAuth})=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const emailRef=useRef();
    const navigate=useNavigate();
    useEffect(()=>{
        emailRef.current.focus();
    },[]);
    const handleLogin=()=>{
        if(email==="admin@gmail.com"&& password==="admin1234"){
            alert("Login Success");
            setIsAuth(true);
            navigate("/admin");
        } else{
            alert("Wrong email or Password");
        }
    };
    return(
        <div>
            <h2>Login</h2>
            <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <br/>
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
export default Login;