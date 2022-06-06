import React, { useContext } from "react";
import {Navigate} from 'react-router-dom'
import Products from '../components/Products/Products'
import { AuthContext } from "../context/AuthContext";
const Home = () => {
  const {isAuth} = useContext(AuthContext);
console.log(isAuth)
  return isAuth ? ( <div>
    <Products/>
  </div>) : (
    <Navigate to="/login" />
  );
  // return (
  //   <Products/>
  // )
};

export default Home;
