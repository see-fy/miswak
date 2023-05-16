import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const transistionHeader = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transistionHeader);
    return () => window.removeEventListener("scroll", transistionHeader);
  }, []);
  return (
    <div
      className={`flex flex-row items-center justify-around ${
        show ? "bg-slate-300" : `bg-white`
      } z-50 w-full  mx-auto  h-20 rounded-b-md p-4 md:p-10 top-0 left-0 right-0 ease-in transition-all duration-500 fixed`}
    >
      <div
        className="flex items-end justify-end cursor-pointer space-x-1"
        onClick={() => navigate("/landing")}
      >
        <img
          src={require("../assets/logo.png")}
          alt="Logo"
          className=" rounded-sm h-10 lg:h-16 invert"
        />
      </div>
      <div className="flex space-x-3 sm:space-x-6">
        <button
          className=" outline-none text-center hidden lg:inline font-bold  p-1 text-xs"
          onClick={() => navigate("/")}
        >
          accueil
        </button>
        <button
          className="space-x-2 items-center  hidden lg:inline font-bold text-xs"
          onClick={() => navigate("/about")}
        >
          à-propos
        </button>
        <button
          className="space-x-2 items-center   font-bold  text-xs"
          onClick={() => navigate("/stockists")}
        >
          revendeurs
        </button>
        <button
          className="space-x-2 items-center   font-bold text-xs"
          onClick={() => navigate("/contact")}
        >
          contacter-nous
        </button>
        <button
          onClick={() => navigate("/shop")}
          className="bg-yellow-300 text-black cursor-pointer   p-3 text-center rounded-lg font-semibold text-xs"
        >
          Commander
        </button>
      </div>
    </div>
  );
}

export default Header;
