import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import TaskRoute from "./Routes/TaskRoute/TaskRoute";
import IndexRoute from "./Routes/IndexRoute/IndexRoute";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexRoute />,
      errorElement: <Error />,
    },
    {
      path: "/:taskId",
      element: <TaskRoute />,
    },
  ]);
  return <RouterProvider router={router} />;
};
