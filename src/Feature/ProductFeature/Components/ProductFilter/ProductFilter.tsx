import * as React from "react";

export interface ProductFilterProps {}

export default function ProductFilter({}: ProductFilterProps) {
  const filters: string[] = [
    "Tên A-Z",
    "Tên Z-A",
    "Hàng mới",
    "Giá thấp đến cao",
    "Giá cao xuống thấp",
  ];

  const handleFilter = (filter: string) => {
    console.log(filter);
  };

  return (
    <div className="mb-5 py-5 border-b-[1px]">
      <ul className="flex">
        {filters.map((filter, index) => (
          <li
            key={index}
            onClick={() => handleFilter(filter)}
            className="pr-2 font-medium"
          >
            {filter}
          </li>
        ))}
      </ul>
    </div>
  );
}
