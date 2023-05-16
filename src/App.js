import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Stockists from "./pages/stockists";
import Shop from "./pages/shop";

function App() {
  return (
    <div>
      <Routes>
        <>
          <Route exact path="/" element={<Home />} />
          <Route path="/stockists" element={<Stockists />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}
export default App;
