import { Routes,Route } from "react-router-dom";
import "./App.css";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";
import Home from './pages/Home'
import Login from './pages/Login'
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/product" element={<Product/>}/>
     
     </Routes>
    </div>
  );
}

export default App;
