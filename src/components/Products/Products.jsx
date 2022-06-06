import React, { useEffect, useState } from "react";
import Product from './Product/Product'
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const getData = async ()=>{
      let res = await axios.get("http://localhost:8080/products");
      let data = res.data;
      
      setProducts(data);

    } 
     getData()
  },[])

  return <div>
    {products.map((el)=>{
      return(
        <Product el={el}/>
      )
    })}
    
  </div>;
};

export default Products;
