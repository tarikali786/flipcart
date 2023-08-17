import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import About from "./About";
import Cart from "./cart";
import AboutInfo from "./component/AboutPage";
import { useState } from "react";
import Header from "./Header";
import CartCheck from "./cartCheckit/cartcheck";
import Success from "./cartCheckit/success";
function App() {

  const [cartData,setCartData]=useState([])
  console.log("cartData",cartData)
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="aboutProduct/:id/" element={<AboutInfo cartData={cartData} setCartData={setCartData}/>} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About cartData={cartData} />} />
        <Route path="cart" element={<Cart data={cartData} />}  />
        <Route path="cart/cartCheck" element={<CartCheck />}  />
        <Route path="cart/cartCheck/success" element={<Success />}  />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
