import * as React from "react";
import { Header } from "../../components";
import {
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { ProductDescription } from "./Components/ProductDescription";
import { ProductReview } from "./Components/ProductReviews";

export interface ProductDetailProps {}

export function ProductDetail({}: ProductDetailProps) {
  const { productId } = useParams();
  const { pathname } = useLocation();

  const navLinkClass: (isActive: any) => string = ({ isActive }) => {
    return isActive ? "text-sky-400" : "";
  };

  return (
    <section>
      <Header />
      Chi tiết sản phẩm
      <ul className="flex">
        <li className="m-2">
          <NavLink
            to={`/product/${productId}/dsc`}
            end
            className={navLinkClass}
          >
            Mô tả sản phẩm
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink
            to={`/product/${productId}/review`}
            end
            className={navLinkClass}
          >
            Đánh giá sản phẩm
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="dsc" element={<ProductDescription />} />
        <Route path="review" element={<ProductReview />} />
        <Route index element={<ProductDescription />} />
      </Routes>
    </section>
  );
}
