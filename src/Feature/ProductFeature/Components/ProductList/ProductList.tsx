import * as React from "react";
import { Product as ProductType } from "../../../../types";
import { Product } from "../Product/Product";
import { Link, useLocation } from "react-router-dom";

export interface ProductListProps {
  products: ProductType[];
}

export default function ProductList({ products }: ProductListProps) {
  const { pathname } = useLocation();
  return (
    <div className="mt-5">
      <ul className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`${pathname}/${product.id}`}>
              <Product product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
