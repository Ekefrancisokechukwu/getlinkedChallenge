import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <h1 className="text-[36px] logo  mb:text-[15px] font-bold text-white">
        get<span className="text-pink">linked</span>
      </h1>
    </Link>
  );
};
export default Logo;
