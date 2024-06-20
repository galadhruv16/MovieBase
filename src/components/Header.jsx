import React from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../utils/constants"; 
import { USER_LOGO } from "../utils/constants"; 
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <nav className="container mx-auto flex items-center justify-between py-4">
        
        <Link to="/" className="flex items-center">
          <img className="w-24" src={LOGO} alt="LOGO" />
        </Link>

        
        <div className="flex items-center">
          <p className="text-lg text-white ml-6">USER</p>
          
          <img className="w-12 ml-4" src={USER_LOGO} alt="User Logo" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
