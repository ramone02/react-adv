import React from "react";
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes } from "react-router-dom";
import logo from "../assets/react.svg";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages/index";

//diferencia entre Link y NavLink
//Link similar <a href=""/> navegacion
// para estilo si esta en la ruta o no active- not active
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li> {/* //isActive valor booleano */}
              <NavLink to="/lazy1" className={({isActive})=> isActive ? 'nav-active' : ""}>Lazy1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={({isActive})=>isActive ? 'nav-active' : ""}>Lazy2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={({isActive})=>isActive ? 'nav-active' : ""}>Lazy3</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="lazy1" element={<LazyPage1/>}></Route>
            <Route path="lazy2" element={<LazyPage2/>}></Route>
            <Route path="lazy3" element={<LazyPage3/>}></Route>
            <Route path="*" element={<Navigate to="/lazy1" replace/>} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
