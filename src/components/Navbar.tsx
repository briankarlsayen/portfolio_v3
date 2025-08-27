import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";

function Navbar() {
  const html = document.documentElement;
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    console.log("toggle");
    html.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  let location = useLocation();
  const isCurrLoc = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex justify-center p-4 w-screen">
      <div className="flex justify-between w-full max-w-4xl border border-gray-700 p-2 items-center rounded-md">
        <div className="p-1">
          <img className="w-8" src="./images/logo.svg" alt="app logo" />
        </div>
        <ul className="flex items-center justify-center lowercase">
          <li className={isCurrLoc("/") ? "selected-text" : "nav-items"}>
            <NavLink to="/" className="p-2">
              Home
            </NavLink>
          </li>
          <li
            className={isCurrLoc("/projects") ? "selected-text" : "nav-items"}
          >
            <NavLink to="/projects" className="p-2">
              Projects
            </NavLink>
          </li>
          <li className={isCurrLoc("/contact") ? "selected-text" : "nav-items"}>
            <NavLink to="/contact" className="p-2">
              Contact
            </NavLink>
          </li>
        </ul>
        <button className="cursor-pointer" onClick={() => toggleDarkMode()}>
          <span className="text-xl group py-2 ">
            {darkMode ? (
              <FaSun className="text-yellow-400 w-6 h-6 transition-transform duration-300 group-hover:rotate-45 " />
            ) : (
              <FaMoon className="text-gray-700 dark:text-gray-300 w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
