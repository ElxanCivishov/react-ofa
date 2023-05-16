import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Suspense } from "react";

import "./App.scss";
import "./../public/myscripts/jquery.min.js";
import "./../public/myscripts/bootstrap.bundle.min.js";
import "./../public/css/app.scss";

import "slick-carousel/slick/slick.css";
import "./../public/css/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "./components/Layout/Layout";
import Home from "./pages/home/Index";
import NotFound from "./pages/notFound/NotFound.jsx";
import DryFruits from "./components/Products/DryFruits";
import About from "./pages/about/Index";
import Recipes from "./pages/recipes/Index";
import Recipe from "./pages/recipes/Recipe";
import Gallery from "./pages/gallery/Index";
import Contact from "./pages/contact/Index";
import PackageProduct from "./components/Products/PackageProduct";
import Jams from "./components/Products/Jams";
import ErrorPage from "./pages/errorPage/ErrorPage";

import "./i18n";
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
      // eng
      {
        path: "/dry-fruits",
        element: <DryFruits />,
      },
      {
        path: "/package-products",
        element: <PackageProduct />,
      },
      {
        path: "/jams",
        element: <Jams />,
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
        path: "/recipe/:id",
        element: <Recipe />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // rus
      {
        path: "/cухофрукты",
        element: <DryFruits />,
      },
      {
        path: "/упакованные-продукты",
        element: <PackageProduct />,
      },
      {
        path: "/джемы",
        element: <Jams />,
      },
      {
        path: "/o-нас",
        element: <About />,
      },
      {
        path: "/рецепты",
        element: <Recipes />,
      },
      {
        path: "/рецепт/:id",
        element: <Recipe />,
      },
      {
        path: "/галерея",
        element: <Gallery />,
      },
      {
        path: "/контакт",
        element: <Contact />,
      },

      // az
      {
        path: "/quru-meyveler",
        element: <DryFruits />,
      },
      {
        path: "/paket-mehsullar",
        element: <PackageProduct />,
      },
      {
        path: "/murebbeler-cemler",
        element: <Jams />,
      },
      {
        path: "/haqqimizda",
        element: <About />,
      },
      {
        path: "/reseptler",
        element: <Recipes />,
      },
      {
        path: "/resept/:id",
        element: <Recipe />,
      },
      {
        path: "/qalereya",
        element: <Gallery />,
      },
      {
        path: "/elaqe",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/errorpage",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <Suspense fallback="loading123"> */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    {/* </Suspense> */}
  </>
);
