import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MovieList from "../pages/MOvieList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MovieList />,
      },
      {
        path: "/:id",
        element: <MovieList />,
      },
    ],
  },
]);
export default router;
