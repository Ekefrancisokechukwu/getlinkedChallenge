import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="bg-[#150E28] min-h-screen grid place-items-center">
        <div className="text-center">
          <h1 className="text-8xl">
            4<span className="text-pink">0</span>4
          </h1>
          <p className="text-xl mt-2">Page Not Found</p>
          <Link to={"/"} className="mt-6 border p-3 rounded">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen grid place-items-center bg-[#150E28]">
      <h1 className="text-7xl">Something went wrong</h1>
    </main>
  );
};
export default Error;
