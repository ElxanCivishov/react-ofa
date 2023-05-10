import React from "react";
import ReactDOM from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/home/Index";
import NotFound from "./pages/notFound/NotFound.jsx";
import Products from "./components/Products/Index";

import "./App.scss";
import "./../public/myscripts/jquery.min.js";
import "./../public/myscripts/bootstrap.bundle.min.js";
import "./../public/css/app.scss";

import "slick-carousel/slick/slick.css";
import "./../public/css/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
