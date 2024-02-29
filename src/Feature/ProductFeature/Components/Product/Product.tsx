import { useState } from "react";
import { Product as ProductData } from "../../../../types";
import { Link } from "react-router-dom";
import "./Style.scss";

export interface ProductProps {
  product: ProductData;
}

const SIZE = 24;

function truncateNameProduct(productName: string): string {
  if (productName.length >= SIZE) {
    return productName.slice(0, SIZE).concat("...");
  }
  return productName;
}

export function Product({ product }: ProductProps) {
  const { id, productImage, productType, productName, productPrice } = product;
  const images = productImage.split(" ");

  const [indexImg, setIndexImage] = useState(images.length - 1);

  const handleIndexImage = (index: number) => {
    setIndexImage(index);
  };

  return (
    <div className=" product-cart p-5 cursor-pointer group relative overflow-hidden border-[1px]	">
      <img src={images[indexImg]} alt="" />
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
        <p className="font-medium text-base uppercase opacity-50">
          {productType.productTypeName}
        </p>
        <h3 className="tracking-wider">{truncateNameProduct(productName)}</h3>
        <p>{productPrice}</p>
      </div>
      <div className="product-cart__action absolute left-0 bottom-0 w-full translate-y-24 duration-1000 group-hover:translate-y-0 ">
        <Link className="border-[2px] block text-center py-5 bg-white" to="/">
          Tùy chọn
        </Link>
      </div>
    </div>
  );
}
