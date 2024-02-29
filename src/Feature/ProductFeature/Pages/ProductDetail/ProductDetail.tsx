import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { productApi } from "../../../../apis/ProductApi";
import { Product, Size } from "../../../../types";
import QuantityController from "../../Components/QuantityController/QuantityController";
import {
  ProductDescription,
  ProductRating,
  ProductSizeGuide,
} from "../../Components";

export interface ProductDetailProps {}

function handlePathName(url: string): string {
  const listPath: string[] = ["dsc", "rate", "guide"];
  const isPath = listPath.find((path) => url.includes(path));
  return isPath ? url.slice(0, url.lastIndexOf("/")) : url;
}

export function ProductDetail(props: ProductDetailProps) {
  const { productId } = useParams();
  const { pathname } = useLocation();
  const [indexImage, setIndexImage] = useState<number>(0);

  const path = handlePathName(pathname);

  const { data, isPending } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => productApi.getProductById(productId as string),
  });

  if (!data) return null;

  const { data: productData }: Product | any = data;
  const {
    id,
    productName,
    productImage,
    productPrice,
    productType,
    Sizes: listSize,
  } = productData;

  const images: string[] = productData.productImage.split(" ");

  return (
    // breadcrumb
    <div>
      <div className="breadcrumb border-y-[1px]">
        <div className="container mx-auto">
          <ul className="flex items-center py-5">
            <li className="font-medium">Trang chủ</li>
            <li className="font-medium uppercase hover:text-main">
              <span className="text-sm">{">"}</span>
              {productType.productTypeName}
            </li>
            <li className="text-main">
              <span className="text-sm text-main-color">{">"}</span>
              {productName}
            </li>
          </ul>
        </div>
      </div>
      {/* Product Detail */}
      <div className="container py-5 mx-auto">
        <div className="product flex">
          <div className="product_left basis-2/4">
            <div className="product_left-img">
              <div className="text-center">
                <img src={images[indexImage]} className="inline-block" alt="" />
              </div>
              <ul className="flex justify-center gap-2">
                {images.map((img, index) => (
                  <li key={index} className="basis-1/6 border-[1px]">
                    <img src={img} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="product_right basis-2/4">
            <h3 className="text-3xl tracking-wide pb-5">{productName}</h3>
            <h3 className="text-2xl pb-5">{productPrice}</h3>
            {listSize.length > 0 && (
              <div className="flex items-center">
                <p>Kích thước: </p>
                <ul className="flex gap-2">
                  {listSize.map((size: Size) => (
                    <li className="p-2 border-[1px]" key={size.id}>
                      {size.sizeName}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <QuantityController />
          </div>
        </div>
      </div>

      <ul>
        <li>
          <NavLink to={`${path}/dsc`}>Mô tả sản phẩm</NavLink>
        </li>
        <li>
          <NavLink to={`${path}/rate`}>Đánh giá sản phẩm</NavLink>
        </li>
        <li>
          <NavLink to={`${path}/guide`}>Hướng dẫn chọn size</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="dsc" element={<ProductDescription />} />
        <Route path="rate" element={<ProductRating />} />
        <Route path="guide" element={<ProductSizeGuide />} />
        <Route index element={<ProductDescription />} />
      </Routes>
    </div>
  );
}
