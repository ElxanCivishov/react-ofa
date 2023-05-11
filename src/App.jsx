import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/home/Index";
import NotFound from "./pages/notFound/NotFound.jsx";
import Products from "./components/Products/Index";
import About from "./pages/about/Index";
import Recipes from "./pages/recipes/Index";
import Gallery from "./pages/gallery/Index";
import Contact from "./pages/contact/Index";

import "./App.scss";
import "./../public/myscripts/jquery.min.js";
import "./../public/myscripts/bootstrap.bundle.min.js";
import "./../public/css/app.scss";

import "slick-carousel/slick/slick.css";
import "./../public/css/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PackageProduct from "./components/packageProducts/PackageProduct";
import Daily from "./components/sliders/Daily";
import ErrorPage from "./pages/errorPage/ErrorPage";

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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/package-products",
        element: <PackageProduct />,
      },
      {
        path: "/jams",
        element: <Daily />,
      },
    ],
  },
  {
    path: "/errorpage",
    element: <ErrorPage />,
    children: [
      {
        path: "/errorpage",
        element: <ErrorPage />,
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
