import { useState } from "react";
import { Product } from "../../../../types";
import { formatPriceByVND } from "../../../../utils";
import QuantityController from "../QuantityController/QuantityController";
import { isUndefined, omitBy } from "lodash";
import classNames from "classnames";
import { useQuery } from "@tanstack/react-query";
import { storeApi } from "../../../../apis";

export interface ProductDetailRightProps {
  productData: Product;
}

function compareById(a: any, b: any) {
  return a.id - b.id;
}

export interface Params {
  id: number | string;
  size?: number | string;
  color?: string;
}

export function ProductDetailRight({ productData }: ProductDetailRightProps) {
  const [productQuantity, setProductQuantity] = useState<number | string>(1);

  const handleProductQuantityChange = (newProductQuantity: number) => {
    setProductQuantity(newProductQuantity);
  };

  const { id, productName, productPrice, productImage, Sizes, Colors } =
    productData;

  const listProductSize = Sizes?.sort(compareById);
  const listProductColor = Colors?.sort(compareById);
  const listImage = productImage.split(" ");

  const [indexSizeActive, setIndexSizeActive] = useState(0);
  const [indexColorActive, setIndexColorActive] = useState(0);

  const [params, setParams] = useState(
    omitBy(
      {
        id: id,
        color:
          listProductColor !== undefined &&
          listProductColor[indexColorActive] !== undefined
            ? listProductColor[indexColorActive].colorName
            : undefined,
        size:
          listProductSize !== undefined &&
          listProductSize[indexSizeActive] !== undefined &&
          +listProductSize[indexSizeActive].sizeName != 0
            ? listProductSize[indexSizeActive].sizeName
            : 0,
      },
      isUndefined,
    ),
  );

  const { data } = useQuery({
    queryKey: ["stores", params],
    queryFn: () => storeApi.getStoreHasProduct({ ...params }),
  });

  return (
    <div>
      {/* {/* <div className="product_right basis-2/4"> */}
      <h3 className="text-2xl tracking-wide pb-5">{productName}</h3>
      <h3 className="text-2xl font-normal pb-5">
        {formatPriceByVND(productPrice)}
      </h3>

      {listProductSize &&
        listProductSize.length > 0 &&
        +listProductSize[indexSizeActive].sizeName != 0 && (
          <div className="flex items-center mb-7">
            <h3 className="text-base pr-2">Kích thước:</h3>
            <div className="flex items-center gap-2">
              {listProductSize.map((size, index) => (
                <div
                  className={classNames({
                    "w-10 h-10 leading-10 font-normal text-center border-[1px] cursor-pointer":
                      true,
                    "border-black": index === indexSizeActive,
                  })}
                  onClick={() => {
                    setIndexSizeActive(index);
                    setParams({ ...params, size: size.sizeName });
                  }}
                  key={index}
                >
                  <span className="text-sm">{size.sizeName}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      {listProductColor && listProductColor.length > 0 && (
        <div className="flex items-center">
          <h3 className="text-base pr-2">Màu sắc:</h3>
          <div className="flex items-center gap-2">
            {listProductColor.map((color, index) => (
              <div
                className={classNames({
                  "flex items-center gap-1 text-center border-[1px] cursor-pointer":
                    true,
                  "border-black": index === indexColorActive,
                })}
                onClick={() => {
                  setIndexColorActive(index);
                  setParams({ ...params, color: color.colorName });
                }}
                key={index}
              >
                <div>
                  <img className="w-10" src={listImage[index]} alt="" />
                </div>
                <span className="text-sm pr-2 font-normal uppercase">
                  {color.colorName}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <QuantityController
        productQuantity={productQuantity}
        onProductQuantityChange={(newProductQuantity) =>
          handleProductQuantityChange(newProductQuantity)
        }
      />

      {data &&
        data.data.map((store) => {
          if (store.quantity && store.quantity > 0) {
            return (
              <div key={store.id} className="pb-5">
                <p className="text-base">{store.storeName}</p>
                <span className=" text-sm capitalize font-normal">
                  {store.storeAddress}
                </span>
              </div>
            );
          }
        })}

      {data &&
        data.data.every((store) => store.quantity && store.quantity < 0) && (
          <h4 className="text-lg pb-5">
            Hiện không còn cửa hàng nào còn sản phẩm này
          </h4>
        )}

      <button className="text-center px-[40px] py-[10px] bg-color-primary hover:bg-main">
        <span className="block text-base uppercase text-mid-white">
          mua ngay với giá <b>{formatPriceByVND(productPrice)}</b>
        </span>
        <span className="font-normal text-mid-white">
          Đặt mua giao hàng tận nơi
        </span>
      </button>

      <div className="pt-5">
        <div className="flex items-center gap-2 mb-2">
          <img
            className="w-10"
            src="https://bizweb.dktcdn.net/100/292/624/themes/758446/assets/policy_images_1.svg?1710857933250"
            alt=""
          />
          <span className="uppercase font-normal text-color-secondary">
            kiểm tra hàng và thanh toán khi <strong>nhận hàng</strong>
          </span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <img
            className="w-10"
            src="https://bizweb.dktcdn.net/100/292/624/themes/758446/assets/policy_images_2.svg?1710857933250"
            alt=""
          />
          <span className="uppercase font-normal text-color-secondary">
            giao hàng <strong>toàn quốc</strong>
          </span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <img
            className="w-10"
            src="https://bizweb.dktcdn.net/100/292/624/themes/758446/assets/policy_images_3.svg?1710857933250"
            alt=""
          />
          <span className="uppercase font-normal text-color-secondary">
            sản phẩm giày tây: bảo hành <strong>3 năm</strong>
          </span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <img
            className="w-10"
            src="https://bizweb.dktcdn.net/100/292/624/themes/758446/assets/policy_images_4.svg?1710857933250"
            alt=""
          />
          <span className="uppercase font-normal text-color-secondary">
            <strong>đổi hàng</strong> trong vòng 33 ngày
          </span>
        </div>
      </div>
    </div>
  );
}
