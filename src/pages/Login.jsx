import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate} from "react-router-dom";
const Login = () => {
const {login,isAuth,setIsAuth} = useContext(AuthContext);
console.log(login,isAuth)
const navigate = useNavigate();

  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e)
 
    login(email,password);
navigate("/")
    
  }
  // "eve.holt@reqres.in"    "cityslicka"

  return (
    <div>
      <input data-cy="login-email" value="eve.holt@reqres.in" onChange={(e)=>setEmail(e.target.value)} />
      <input data-cy="login-password" value="cityslicka" onChange={(e)=>setPassword(e.target.value)} />
      <button data-cy="login-submit" onSubmit={(e)=>handleSubmit(e)}>Submit</button>
    </div>
  );
};

export default Login;
