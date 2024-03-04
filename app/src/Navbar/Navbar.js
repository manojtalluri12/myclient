import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { GiCrossMark } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
const Navbar = ({ handleclick, show }) => {
  return (
    <nav>
      <div className="navleft">
        <Link className="link">Logo</Link>
      </div>
      {show ? (
        <IoMenuSharp size={20} className="menu" onClick={handleclick} />
      ) : (
        <GiCrossMark size={20} className="menu" onClick={handleclick} />
      )}

      <div className={show ? "active" : "navright"}>
        <Link className="link">Home</Link>
        <Link className="link">About</Link>
        <Link className="link">Contact Us</Link>
        <Link>
        <input type="text"/>
        </Link>
        <button>Search</button>
        <Link className="link">
          <FaUser size={20} />
        </Link>
        <Link className="link">
          <IoCartOutline size={20} />
        </Link>
        <Link className="link">
          <IoMenuSharp size={20} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
