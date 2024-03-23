import { useState } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

import "./Style.scss";
import { Product as ProductData } from "../../../../types";
import { formatPriceByVND, truncate } from "../../../../utils";

export interface ProductProps {
  product: ProductData;
  path?: string;
}

export function Product({ product, path }: ProductProps) {
  const { pathname } = useLocation();
  const {
    id,
    productImage,
    productType: { productTypeName },
    productName,
    productPrice,
  } = product;

  const listImages = productImage.split(" ");

  const [indexImageActive, setIndexImageActive] = useState(
    listImages.length - 1,
  );
  return (
    <>
      <div className=" product-cart p-5 cursor-pointer group relative overflow-hidden">
        <Link to={`${pathname == "/" ? path : pathname}/${id}`}>
          <img src={listImages[indexImageActive]} alt="" />
        </Link>

        <ul className="flex justify-center gap-1">
          {listImages.map((img, index) => (
            <li
              key={index}
              className={classNames({
                "{`border-[1px] basis-1/5 cursor-pointer`}": true,
                "opacity-50": index === indexImageActive,
              })}
              onClick={() => {
                setIndexImageActive(index);
              }}
            >
              <img src={img} alt="" />
            </li>
          ))}
        </ul>

        <div className="product-content text-center duration-500 group-hover:invisible">
          <p className="font-medium text-sm uppercase opacity-50">
            {productTypeName}
          </p>
          <h3 className="font-medium tracking-widest py-2">
            {truncate(productName, 24)}
          </h3>
          <p className="font-normal">{formatPriceByVND(productPrice)}</p>
        </div>

        <div className="product-cart__action absolute left-0 bottom-0 w-full translate-y-24 duration-1000 group-hover:translate-y-0 ">
          <Link
            to="/"
            className="border-[0.5px] block text-center py-5 bg-white"
          >
            Tùy chọn
          </Link>
        </div>
      </div>
    </>
  );
}
