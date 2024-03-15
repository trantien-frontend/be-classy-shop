import { useRoutes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import { HomePage } from "../pages/HomePage/HomePage";
import ProductFeature from "../Feature/ProductFeature/ProductFeature";
import {
  ProductDescription,
  ProductRating,
} from "../Feature/ProductFeature/Components";
import { ProductReview } from "../pages/ProductDetailPage/Components/ProductReviews";
import { ProductDetail } from "../Feature/ProductFeature/Pages/ProductDetail/ProductDetail";
import NotFound from "../pages/NotFound";

export function useRoutesElement() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
    {
      path: "dress shoes",
      element: (
        <MainLayout>
          <ProductFeature />
        </MainLayout>
      ),
      children: [
        {
          path: ":productId",
          element: <ProductDetail />,
          children: [
            { path: "", element: <ProductDescription /> },
            { path: "dsc", element: <ProductDescription /> },
            { path: "rate", element: <ProductRating /> },
            { path: "guide", element: <ProductReview /> },
          ],
        },
      ],
    },
    {
      path: "accessories",
      element: (
        <MainLayout>
          <ProductFeature />
        </MainLayout>
      ),
    },
    {
      path: "collection",
      element: (
        <MainLayout>
          <ProductFeature />
        </MainLayout>
      ),
    },
    {
      path: "*",
      element: (
        <MainLayout>
          <NotFound />
        </MainLayout>
      ),
    },
  ]);

  return routes;
}
