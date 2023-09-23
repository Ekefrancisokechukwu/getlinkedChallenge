import { links } from "../../utils/data";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";

const Menu = () => {
  const { isMenuOpen, closeMenu } = useGlobalContext();
  return (
    <div className="tablet:hidden block ">
      <div
        onClick={closeMenu}
        className={`fixed z-40 bg-main/30 w-screen h-screen backdrop-blur ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      ></div>

      <div
        className={`bg-main fixed z-40 left-1/2 top-1/2 
    -translate-x-1/2  -translate-y-1/2 py-[2rem] h-[492px] 
    px-10 transition-all duration-500 rounded-md w-[348px] mb:w-full ${
      isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
    }`}
      >
        <button
          onClick={closeMenu}
          className="w-[23px] menuClose mt-3  h-[23px]  grid
       place-items-center ml-auto rounded-full"
        >
          <RxCross2 />
        </button>

        <ul className="mt-14">
          {links.map((link, index) => {
            return (
              <li
                onClick={closeMenu}
                key={index}
                className="sm:text-[16px] text-[18px] w-full py-3 text-white  capitalize"
              >
                {link.path.includes("#") ? (
                  <a href={link.path} className="navlink w-full">
                    {link.pathName}
                  </a>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `navlink transition-all w-full duration-700 ${
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
          <li onClick={closeMenu}>
            <NavLink
              to={"/register"}
              className={({ isActive }) =>
                isActive ? "gradient-border-mask" : "btn-primary"
              }
            >
              register
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
