import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { productApi } from "../../../../apis/ProductApi";
import { Product, Size } from "../../../../types";
import QuantityController from "../../Components/QuantityController/QuantityController";
import {
  ProductDescription,
  ProductRating,
  ProductSizeGuide,
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
    productPrice,
    productType,
    Sizes: listSize,
  } = productData;

  const images: string[] = productData.productImage.split(" ");

  return (
    <div>
      <Breadcrumb
        productType={productType?.productTypeName}
        productName={productName}
      />
      <div className="container py-5">
        <div className="product-detail flex">
          {/* Product-Detail-Left */}
          <div className="product-detail_left basis-2/4">
            <div>
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
          {/* Product-Detail-Right */}
          <div className="product_right basis-2/4">
            <h3 className="text-2xl tracking-wide pb-5">{productName}</h3>
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

      <div className="container">
        <ul className="flex">
          <li>
            <NavLink className="pr-2 uppercase" to={`${path}/dsc`}>
              Mô tả sản phẩm
            </NavLink>
          </li>
          <li>
            <NavLink className="pr-2 uppercase" to={`${path}/rate`}>
              Đánh giá sản phẩm
            </NavLink>
          </li>
          <li>
            <NavLink className="pr-2 uppercase" to={`${path}/guide`}>
              Hướng dẫn chọn size
            </NavLink>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="dsc" element={<ProductDescription />} />
        <Route path="rate" element={<ProductRating />} />
        <Route path="guide" element={<ProductSizeGuide />} />
        <Route index element={<ProductDescription />} />
      </Routes>
    </div>
  );
}
