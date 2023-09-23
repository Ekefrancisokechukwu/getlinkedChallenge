import { Link, Outlet } from "react-router-dom";
import { Header } from "../components";
import btn from "../assets/images/btn.png";

const SharedLayouts = () => {
  return (
    <>
      <div className="tablet:block hidden">
        <Header />
      </div>

      <div className="bg-main md:pl-10 mobile_lg:pl-11 pl-7 py-7 tablet:hidden block">
        <Link to={"/"}>
          <img src={btn} alt="btn back" />
        </Link>
      </div>

      <Outlet />
    </>
  );
};
export default SharedLayouts;
