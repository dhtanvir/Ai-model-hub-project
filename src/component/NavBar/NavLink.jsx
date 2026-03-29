import React from "react";

const NavLink = ({nav}) => {

    const {label,path}=nav

  return (
    <div>
      <li>
        <a href={path} className="hover:text-white transition">
          {label}
        </a>
      </li>
     
    </div>
  );
};

export default NavLink;
