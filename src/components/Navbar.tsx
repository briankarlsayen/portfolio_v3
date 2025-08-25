import React from "react";

function Navbar() {
  const html = document.documentElement;
  const toggleDarkMode = () => {
    console.log("toggle");
    html.classList.toggle("dark");
  };
  return (
    <div className="flex justify-center p-4 w-screen">
      <div className="flex justify-between w-full max-w-4xl border-2 p-2 items-center rounded-md">
        <h4 className="uppercase">Logo</h4>
        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <button
              className="btn btn-primary"
              onClick={() => toggleDarkMode()}
            >
              Toggle
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
