// import { useRoutes } from "react-router-dom";

import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

export const routes = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/profile",
      //   auth: true,
      //   element: <MyProfile />,
      // },
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
