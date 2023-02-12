import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Dropdown from "../../utils/Dropdown";
function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    
    <nav className=" bg-white shadow-lkhibra w-full">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 ">
        <div className=" px-auto" >
          <Link to="/" className="block" aria-label="lkhibra">
              <Logo className="w-48 md:w-64 mx-auto my-1" />
            </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Header;
