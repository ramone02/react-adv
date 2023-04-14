import React from "react";
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes } from "react-router-dom";
import logo from "../assets/react.svg";

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
              <NavLink to="/" className={({isActive})=> isActive ? 'nav-active' : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive})=>isActive ? 'nav-active' : ""}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive})=>isActive ? 'nav-active' : ""}>Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="about" element={<h1>About</h1>}></Route>
            <Route path="users" element={<h1>Users</h1>}></Route>
            <Route path="/" element={<h1>Home</h1>}></Route>
            <Route path="*" element={<Navigate to="/home" replace/>} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
