import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Contact, Error, Landing, Register, SharedLayouts } from "./pages";

import { ErrorElement } from "./components";

// LOADERS
import { loader as registerLoader } from "./pages/Register";

// ACTIONS
import { action as contactAction } from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    element: <SharedLayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorElement />,
        loader: registerLoader,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorElement />,
        action: contactAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
