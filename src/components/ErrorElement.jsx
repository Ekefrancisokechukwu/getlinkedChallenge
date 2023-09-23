import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <main className="bg-main min-h-[85vh] grid place-items-center">
      <h4 className="font-bold text-4xl text-pink">There was an error</h4>
    </main>
  );
};
export default ErrorElement;
