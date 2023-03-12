import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./comp/About";
import Error from "./comp/Error";
import Home from "./comp/Home";
import Navbar from "./comp/Navbar";
import Products from "./comp/Products";
const url = "https://dummyjson.com/products";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="aboutus" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
