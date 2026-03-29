
import logo from "../../assets/logo.png";
import NavLink from "./NavLink";

const Navbar = ({menuData}) => {

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="flex items-center gap-1 font-bold text-xl">
            <img className="w-10" src={logo} /> Ai Hub
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-10 px-1 text-lg">
            {menuData.map((nav) => (
              <NavLink key={nav.id} nav={nav} />
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <a className="btn bg-red-500 rounded-full text-white">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
