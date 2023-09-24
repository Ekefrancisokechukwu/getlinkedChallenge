import { Link, Outlet } from "react-router-dom";
import { Header } from "../components";
import btn from "../assets/images/btn.png";
import { useNavigation } from "react-router-dom";

const SharedLayouts = () => {
   const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";
  return (
    <>
       {isNavigating && (
        <div className="fixed z-[40] top-0 left-0 w-screen h-screen bg-main/70">
          <div className="h-5 w-5  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-b-2 border-gray-100"></div>
        </div>
      )}
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
