import * as React from "react";
import { Header } from "../components";
import ProductFeature from "../Feature/ProductFeature/ProductFeature";

export interface ProductPageProps {}

export function ProductPage(props: ProductPageProps) {
  return (
    <section>
      <Header />
      <ProductFeature />
    </section>
  );
}
