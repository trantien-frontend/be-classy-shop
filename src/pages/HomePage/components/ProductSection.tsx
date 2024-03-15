import { Link } from "react-router-dom";
import { Product as ProductType } from "../../../types";
import { Product } from "../../../Feature/ProductFeature/Components/Product/Product";
import { Button } from "../../../components";

export interface ProductSectionProps {
  title: string;
  data: ProductType[];
}

export function ProductSection({ title, data: products }: ProductSectionProps) {
  return (
    <section className="pt-[40px]">
      <div className="container">
        <h3 className="text-3xl font-medium uppercase tracking-widest text-center hover:text-main">
          <Link to={`/${title}`}>{title}</Link>
        </h3>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id}>
              <Product product={product} path={title} />
            </div>
          ))}
        </div>
        <div className="text-center py-5">
          <Link to={`/${title}`}>
            <Button text={`xem tất cả. ${title}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
