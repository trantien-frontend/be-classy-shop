import { Outlet, useRoutes, Navigate } from "react-router-dom";

import { MainLayout } from "../Layouts";
import { HomePage } from "../pages/HomePage/HomePage";
import { ProductFeature } from "../Feature/ProductFeature/ProductFeature";
import {
  ProductDescription,
  ProductRating,
  ProductSizeGuide,
} from "../Feature/ProductFeature/Components";
import NotFound from "../pages/NotFound";
import { ProductDetail } from "../Feature/ProductFeature/Pages/ProductDetail/ProductDetail";
import { Profile } from "../pages/Profile/Profile";
import { useContext } from "react";
import { AppContext } from "../context/app.context";
import { ROUTE_PATH } from "../constants/routePath";
import { ProductPage } from "../Feature/ProductFeature/Pages/ProductPage/ProductPage";
import { Login, Register, Search } from "../pages";

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext);
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext);
  return !isAuthenticated ? <Outlet /> : <Navigate to={"/"} />;
}

export function useRoutesElement() {
  const routes = useRoutes([
    {
      path: "",
      element: <RejectedRoute />,
      children: [
        {
          path: ROUTE_PATH.REGISTER,
          element: (
            <MainLayout>
              <Register />
            </MainLayout>
          ),
        },
        {
          path: ROUTE_PATH.LOGIN,
          element: (
            <MainLayout>
              <Login />
            </MainLayout>
          ),
        },
      ],
    },
    {
      path: "",
      element: <ProtectedRoute />,
      children: [
        {
          path: ROUTE_PATH.ACCOUNT,
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          ),
        },
      ],
    },

    {
      path: ROUTE_PATH.DRESS_SHOES,
      element: (
        <MainLayout>
          <ProductFeature />
        </MainLayout>
      ),
      children: [
        {
          path: "",
          index: true,
          element: <ProductPage />,
        },
        {
          path: ":productId",
          element: <ProductDetail />,
          children: [
            { path: "", element: <ProductDescription /> },
            { path: "dsc", element: <ProductDescription /> },
            { path: "rate", element: <ProductRating /> },
            { path: "guide", element: <ProductSizeGuide /> },
          ],
        },
      ],
    },
    {
      path: ROUTE_PATH.OXFORD,
      element: (
        <MainLayout>
          <ProductFeature />
        </MainLayout>
      ),
      children: [
        {
          path: "",
          index: true,
          element: <ProductPage />,
        },
        {
          path: ":productId",
          element: <ProductDetail />,
          children: [
            { path: "", element: <ProductDescription /> },
            { path: "dsc", element: <ProductDescription /> },
            { path: "rate", element: <ProductRating /> },
            { path: "guide", element: <ProductSizeGuide /> },
          ],
        },
      ],
    },
    {
      path: ROUTE_PATH.LOAFER,
      element: (
        <MainLayout>
          <ProductFeature />
        </MainLayout>
      ),
      children: [
        {
          path: "",
          index: true,
          element: <ProductPage />,
        },
        {
          path: ":productId",
          element: <ProductDetail />,
          children: [
            { path: "", element: <ProductDescription /> },
            { path: "dsc", element: <ProductDescription /> },
            { path: "rate", element: <ProductRating /> },
            { path: "guide", element: <ProductSizeGuide /> },
          ],
        },
      ],
    },
    {
      path: ROUTE_PATH.BOOTS,
      element: (
        <MainLayout>
          <ProductFeature />
        </MainLayout>
      ),
      children: [
        {
          path: "",
          index: true,
          element: <ProductPage />,
        },
        {
          path: ":productId",
          element: <ProductDetail />,
          children: [
            { path: "", element: <ProductDescription /> },
            { path: "dsc", element: <ProductDescription /> },
            { path: "rate", element: <ProductRating /> },
            { path: "guide", element: <ProductSizeGuide /> },
          ],
        },
      ],
    },
    {
      path: ROUTE_PATH.DERBY,
      element: (
        <MainLayout>
          <ProductFeature />
        </MainLayout>
      ),
      children: [
        {
          path: "",
          index: true,
          element: <ProductPage />,
        },
        {
          path: ":productId",
          element: <ProductDetail />,
          children: [
            { path: "", element: <ProductDescription /> },
            { path: "dsc", index: true, element: <ProductDescription /> },
            { path: "rate", element: <ProductRating /> },
            { path: "guide", element: <ProductSizeGuide /> },
          ],
        },
      ],
    },
    {
      path: ROUTE_PATH.ACCESSORIES,
      element: (
        <MainLayout>
          <ProductFeature />
        </MainLayout>
      ),
      children: [
        {
          path: "",
          index: true,
          element: <ProductPage />,
        },
        {
          path: ":productId",
          element: <ProductDetail />,
          children: [
            { path: "", element: <ProductDescription /> },
            { path: "dsc", element: <ProductDescription /> },
            { path: "rate", element: <ProductRating /> },
            { path: "guide", element: <ProductSizeGuide /> },
          ],
        },
      ],
    },
    {
      path: ROUTE_PATH.BELT,
      element: (
        <MainLayout>
          <ProductFeature />
        </MainLayout>
      ),
      children: [
        {
          path: "",
          index: true,
          element: <ProductPage />,
        },
        {
          path: ":productId",
          element: <ProductDetail />,
          children: [
            { path: "", element: <ProductDescription /> },
            { path: "dsc", element: <ProductDescription /> },
            { path: "rate", element: <ProductRating /> },
            { path: "guide", element: <ProductSizeGuide /> },
          ],
        },
      ],
    },
    {
      path: ROUTE_PATH.WALLET,
      element: (
        <MainLayout>
          <ProductFeature />
        </MainLayout>
      ),
      children: [
        {
          path: "",
          index: true,
          element: <ProductPage />,
        },
        {
          path: ":productId",
          element: <ProductDetail />,
          children: [
            { path: "dsc", index: true, element: <ProductDescription /> },
            { path: "rate", element: <ProductRating /> },
            { path: "guide", element: <ProductSizeGuide /> },
          ],
        },
      ],
    },
    {
      path: "collection",
      element: (
        <MainLayout>
          <ProductFeature />
        </MainLayout>
      ),
      children: [
        {
          path: "",
          index: true,
          element: <ProductPage />,
        },
        {
          path: ":productId",
          element: <ProductDetail />,
          children: [
            { path: "", element: <ProductDescription /> },
            { path: "dsc", element: <ProductDescription /> },
            { path: "rate", element: <ProductRating /> },
            { path: "guide", element: <ProductSizeGuide /> },
          ],
        },
      ],
    },
    {
      path: "*",
      element: (
        <MainLayout>
          <NotFound />
        </MainLayout>
      ),
    },
    {
      path: "/search",
      element: (
        <MainLayout>
          <Search />
        </MainLayout>
      ),
    },
    {
      path: "/",
      index: true,
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
  ]);

  return routes;
}
