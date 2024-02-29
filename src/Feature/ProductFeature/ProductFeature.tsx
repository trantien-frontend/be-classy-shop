import {} from "react";

import { Route, Routes, useParams } from "react-router-dom";
import { ProductPage } from "./Pages/ProductPage/ProductPage";
import { ProductDetail } from "./Pages/ProductDetail/ProductDetail";

export interface ProductFeatureProps {}

export default function ProductFeature(props: ProductFeatureProps) {
  return (
    <>
      <Routes>
        <Route index element={<ProductPage />} />
        <Route path=":productId/*" element={<ProductDetail />} />
      </Routes>
    </>
  );
}
