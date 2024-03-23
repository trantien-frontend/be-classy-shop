import { useQuery } from "@tanstack/react-query";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { productApi } from "../../../../apis/ProductApi";
import {
  ProductDetailLeft,
  ProductDetailRight,
  ProductDetailTabs,
} from "../../Components";
import { Breadcrumb } from "../../../../components";

export interface ProductDetailProps {}

function handlePathName(url: string): string {
  const listPath: string[] = ["dsc", "rate", "guide"];
  const isPath = listPath.find((path) => url.includes(path));
  return isPath ? url.slice(0, url.lastIndexOf("/")) : url;
}

export function ProductDetail(props: ProductDetailProps) {
  const { productId } = useParams();
  const { pathname } = useLocation();

  const path = handlePathName(pathname);

  const { data } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => productApi.getProductById(productId as string),
  });

  if (!data) return;

  const productDetail = data?.data;
  const {
    productName,
    productType: { productTypeName },
    productImage,
  } = productDetail;
  return (
    <section className="container">
      {data && (
        <Breadcrumb
          pathBasdeFirst={productName}
          pathBasdeSecond={productTypeName}
        />
      )}

      <div className="flex items-center py-5">
        <ProductDetailLeft productImage={productImage} />
        <ProductDetailRight productData={productDetail} />
      </div>

      <ProductDetailTabs>
        <Outlet />
      </ProductDetailTabs>
    </section>
  );
}
