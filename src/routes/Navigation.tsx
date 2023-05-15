import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../assets/react.svg";
/* Tener una sola linea de imports */
import { FormikAbstraction, FormikComponents, FormikYupPage, FormikBasicPage, RegisterPage } from "../03-forms/pages";
/* import { RegisterPage } from "../03-forms/pages/RegisterPage";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import { FormikYupPage } from "../03-forms/pages/FormikYupPage";
import { FormikComponents } from "../03-forms/pages/FormikComponents";
import { FormikAbstraction } from "../03-forms/pages/FormikAbstraction"; */

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
            <li>
              {" "}
              {/* //isActive valor booleano */}
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              {" "}
              {/* //isActive valor booleano */}
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              {" "}
              {/* //isActive valor booleano */}
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstraction"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstraction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="about" element={<h1>About</h1>}></Route>
          <Route path="users" element={<h1>Users</h1>}></Route>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="formik-basic" element={<FormikBasicPage />}></Route>
          <Route path="formik-yup" element={<FormikYupPage />}></Route>
          <Route
            path="formik-abstraction"
            element={<FormikAbstraction />}
          ></Route>
          <Route
            path="formik-components"
            element={<FormikComponents />}
          ></Route>
          <Route path="*" element={<Navigate to="/home" replace />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
