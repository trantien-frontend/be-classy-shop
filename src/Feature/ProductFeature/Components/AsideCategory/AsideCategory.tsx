import {} from "react";

export interface AsideCategoryProps {}
const listCategory = [
  "Chăm sóc khách hàng",
  "Hệ thống tích điểm",
  "Chính sách đổi hàng",
  "Chính sách bảo hành",
  "Chính sách thanh toán",
  "Chích sách vận chuyển",
];

export function AsideCategory(props: AsideCategoryProps) {
  return (
    <div>
      <h3 className="text-xl tracking-wider pb-4">DANH MỤC</h3>
      <ul className="list-aside-category">
        {listCategory.map((category, index) => (
          <li key={index} className="text-base font-medium pb-2.5">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
