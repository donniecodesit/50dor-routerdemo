import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Homepage from "./Components/Homepage/Homepage";
import Users from "./Components/Users/Users";
import User from "./Components/User/User";
import Error from "./Components/Error/Error";
import { useTheme } from "./Context";

export default function App() {
  const {theme, setTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <div>
        <a href="#app" id="btnTheme" className={`float-start theme-btn-${theme}`} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          <FontAwesomeIcon icon={faMoon} />
        </a>
        <nav>
          <ul>
            <li><NavLink activeclassname="activeElementNew" to="/">Home Page</NavLink></li>
            <li><NavLink activeclassname="activeElementNew" to="/contact">Contact Page</NavLink></li>
            <li><NavLink activeclassname="activeElementNew" to="/about">About Page</NavLink></li>
            <li><NavLink activeclassname="activeElementNew" to="/users">Users Page</NavLink></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/users/:id" element={<User/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  )
}