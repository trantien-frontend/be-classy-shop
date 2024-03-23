export interface ProductDetailLeft {
  productImage: string;
}
export function ProductDetailLeft({ productImage }: ProductDetailLeft) {
  const listImage = productImage.split(" ");
  return (
    <div className="basis-2/4">
      <div>
        <div className="flex justify-center">
          <img src={listImage[0]} alt="" />
        </div>

        <ul className="flex justify-center gap-2">
          {listImage.map((image) => (
            <li className="basis-1/6 border-[1px]">
              <img src={image} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
