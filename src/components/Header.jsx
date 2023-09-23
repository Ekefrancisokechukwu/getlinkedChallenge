import Logo from "./Logo";
import Navbar from "./Navbar";
import Headroom from "react-headroom";
import menuBtn from "../assets/images/hamburger.png";
import { useGlobalContext } from "../context/globalContext";

const Header = () => {
  const { openMenu } = useGlobalContext();
  return (
    <Headroom style={{ zIndex: 25 }}>
      <header className="bg-main border-b-style z-40  top-0 flex items-center    justify-between py-6 lg:px-16 px-8">
        <div className="">
          <Logo />
        </div>

        <Navbar />

        <button onClick={openMenu} className="tablet:hidden block">
          <img src={menuBtn} alt="menu btn" />
        </button>
      </header>
    </Headroom>
  );
};
export default Header;
