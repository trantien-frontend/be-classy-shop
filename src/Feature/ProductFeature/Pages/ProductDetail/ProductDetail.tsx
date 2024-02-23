import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { productApi } from "../../../../apis/ProductApi";
import { Product, size } from "../../../../types";

export interface ProductDetailProps {}

const INDEX_DEFAULT = 0;

export function ProductDetail({}: ProductDetailProps) {
  const { productId } = useParams();
  const [indexImage, setIndexImage] = useState<number>(0);

  const { data } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => productApi.getProductById(productId as string),
  });

  if (!data) return null;

  const { data: productData }: Product | any = data;
  const images: string[] = productData.productImage.split(" ");

  const { productName, productPrice, productType, listSize } = productData;
  console.log(listSize);

  return (
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
                  {listSize.map((size: size) => (
                    <li className="p-2 border-[1px]" key={size.id}>
                      {size.sizeName}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex">
              <button className="flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <input
                type="text"
                className="flex h-8 w-12 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600"
              />
              <button className="flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
