import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PATH } from "../constants/path";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: PATH.ROOT,
      element: <App />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
