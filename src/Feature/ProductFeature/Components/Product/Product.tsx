import { useState } from "react";
import { Product as ProductData } from "../../../../types";
import { Link, useLocation } from "react-router-dom";
import "./Style.scss";

export interface ProductProps {
  product: ProductData;
  path?: string;
}

const SIZE = 24;

function truncateNameProduct(productName: string): string {
  if (productName.length >= SIZE) {
    return productName.slice(0, SIZE).concat("...");
  }
  return productName;
}

export function Product({ product, path }: ProductProps) {
  const { pathname } = useLocation();
  const { id, productImage, productType, productName, productPrice } = product;
  const images = productImage.split(" ");
  const [indexImg, setIndexImage] = useState(images.length - 1);
  const handleIndexImage = (index: number) => {
    setIndexImage(index);
  };

  return (
    <>
      <div className=" product-cart p-5 cursor-pointer group relative overflow-hidden">
        <Link to={`${pathname == "/" ? path : pathname}/${id}`}>
          <img src={images[indexImg]} alt="" />
        </Link>

        <ul className="list-img flex justify-center gap-1">
          {images.map((image, index) => {
            return (
              <li
                key={index}
                className={`border-[1px] basis-1/5 cursor-pointer ${index == indexImg && " opacity-50"}`}
                onClick={() => {
                  handleIndexImage(index);
                }}
              >
                <img src={image} alt="" />
              </li>
            );
          })}
        </ul>
        <div className="product-content text-center duration-500 group-hover:invisible">
          <p className="font-medium text-sm uppercase opacity-50">
            {productType.productTypeName}
          </p>
          <h3 className="font-medium tracking-widest py-2">
            {truncateNameProduct(productName)}
          </h3>
          <p className="font-medium">{productPrice}</p>
        </div>
        <div className="product-cart__action absolute left-0 bottom-0 w-full translate-y-24 duration-1000 group-hover:translate-y-0 ">
          <Link
            className="border-[0.5px] block text-center py-5 bg-white"
            to="/"
          >
            Tùy chọn
          </Link>
        </div>
      </div>
    </>
  );
}
