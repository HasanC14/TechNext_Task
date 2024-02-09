import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Error from "../Components/Error";
import DetailedCard from "../Components/DetailedCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/:id",
    element: <DetailedCard />,
    loader: async ({ params }) => {
      const response = await fetch(`https://dummyjson.com/users/${params.id}`);
      const data = await response.json();
      return data;
    },
  },

  { path: "*", element: <Error /> },
]);
export default router;
