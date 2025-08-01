
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Professor from "../pages/professor/page";
import Members from "../pages/members/page";
import Publications from "../pages/publications/page";
import Seminar from "../pages/seminar/page";
import Teaching from "../pages/teaching/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/professor",
    element: <Professor />,
  },
  {
    path: "/members",
    element: <Members />,
  },
  {
    path: "/publications",
    element: <Publications />,
  },
  {
    path: "/seminar",
    element: <Seminar />,
  },
  {
    path: "/teaching",
    element: <Teaching />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
