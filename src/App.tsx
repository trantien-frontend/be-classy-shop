import {} from "react";

import "./App.css";
import { Route, Routes, useRoutes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound";
import ProductFeature from "./Feature/ProductFeature/ProductFeature";
import { Footer, Header } from "./components";

function App() {
  // const routes = useRoutes([
  //   { path: "/", element: <HomePage /> },
  //   { path: "dress shoes", element: <ProductFeature /> },
  //   { path: "accessories", element: <ProductFeature /> },
  //   { path: "collection", element: <ProductFeature /> },
  //   { path: "*", element: <NotFound /> },
  // ]);
  return (
    <section id="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dress shoes/*" element={<ProductFeature />} />
        <Route path="oxford/*" element={<ProductFeature />} />
        <Route path="derby/*" element={<ProductFeature />} />
        <Route path="loafer/*" element={<ProductFeature />} />
        <Route path="boots/*" element={<ProductFeature />} />
        <Route path="accessories/*" element={<ProductFeature />} />
        <Route path="collection/*" element={<ProductFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
