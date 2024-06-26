// import { useRoutes } from "react-router-dom";

import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";
import About from "../pages/about";
import Shop from "../pages/shop";
import Gallery from "../pages/gallery";
import Detail from "../pages/detail";
import Login from "../pages/login";
import ProductTest from "../pages/test/ProductTest";
import LoginMainLayout from "../layout/LoginMainLayout";

export const routes = [
  {
    path: "/auth",
    element: <LoginMainLayout />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "products",
        element: <Detail />,
        children: [
          {
            index: true,
            element: <Detail />,
          },
          {
            path: ":id",
            element: <ProductTest />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

// export const authMap = (routes) => {
//   return routes.map((route) => {
//     if (route.auth) {
//       route.element = <PrivateLayout>{route.element}</PrivateLayout>;
//     }
//     return route;
//   });
// };

export const useAuthMapRoutes = () => {
  return useRoutes(routes);
};
