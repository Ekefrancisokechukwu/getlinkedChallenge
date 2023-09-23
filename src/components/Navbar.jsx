import { NavLink } from "react-router-dom";
import { links } from "../../utils/data";

const Navbar = () => {
  return (
    <nav className="tablet:inline-block hidden">
      <ul className="flex items-center gap-12">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className="sm:text-[16px] text-[18px] text-white  capitalize"
            >
              {link.path.includes("#") ? (
                <a href={link.path} className="navlink">
                  {link.pathName}
                </a>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `navlink transition-all duration-700 ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  {link.pathName}
                </NavLink>
              )}
            </li>
          );
        })}

        <li className="ml-10">
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "gradient-border-mask" : "btn-primary"
            }
          >
            register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
