import {} from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound";
import ProductFeature from "./Feature/ProductFeature/ProductFeature";
import { Footer, Header } from "./components";

function App() {
  return (
    <section id="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feature-product/*" element={<ProductFeature />} />
        <Route path="/accessories/*" element={<ProductFeature />} />
        <Route path="/collection/*" element={<ProductFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
