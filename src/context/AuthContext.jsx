import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth,setIsAuth] = React.useState(false);
    const login = (email,password)=>{
      console.log(email,password)
      if(email=="eve.holt@reqres.in" && password=="cityslicka"){
        setIsAuth(!isAuth);
      }
    }
    const logout = ()=>{
      setIsAuth(false)
    }
  
  return <AuthContext.Provider value={{isAuth,login,logout,setIsAuth}}>{children}</AuthContext.Provider>;
};
