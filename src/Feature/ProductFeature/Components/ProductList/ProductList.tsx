import {} from "react";
import { Product as ProductType } from "../../../../types";
import { Product } from "../Product/Product";

export interface ProductListProps {
  products: ProductType[] | undefined;
}

export function ProductList({ products }: ProductListProps) {
  if (!products) return <></>;
  return (
    <div className="mt-5">
      <ul className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
