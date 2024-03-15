import { Link } from "react-router-dom";

export interface BreadcrumbProps {
  productType?: string;
  productName?: string;
}

export function Breadcrumb({ productType, productName }: BreadcrumbProps) {
  return (
    <div className="breadcrumb border-y-[0.5px]">
      <div className="container mx-auto">
        <ul className="flex items-center py-3">
          <li>
            <Link className="font-normal" to={"/"}>
              Trang chủ
            </Link>
          </li>

          <li className="font-normal">
            <span className="text-sm mx-2">{">"}</span>
            <Link className="uppercase hover:text-main" to={`/${productType}`}>
              {productType}
            </Link>
          </li>

          <li className="font-normal">
            <span className="text- mx-2">{">"}</span>
            <span className="uppercase font-bold text-main">{productName}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
