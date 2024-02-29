import { useState } from "react";
import "./style.scss";

export interface ProductFilterProps {
  onFilterChange: (filter: string) => void;
}

interface Filter {
  id: number;
  filterName: string;
  filterCategory: string;
}

export function ProductFilter({ onFilterChange }: ProductFilterProps) {
  const [index, setIndex] = useState<number | null>(null);
  const listFilter: Filter[] = [
    { id: 1, filterName: "Tên A-Z", filterCategory: "productName:asc" },
    { id: 2, filterName: "Tên Z-A", filterCategory: "productName:dsc" },
    {
      id: 3,
      filterName: "Giá thấp đến cao",
      filterCategory: "productPrice:asc",
    },
    {
      id: 4,
      filterName: "Giá cao đến thấp",
      filterCategory: "productPrice:dsc",
    },
  ];

  const customeCheckBox = `check-box-custome block w-5 h-5 border-[1px] rounded-full relative group-hover:border-[#916841]`;
  const beforeCustomeCheckBox =
    "before:content[''] before:absolute before:w-2/4 before:h-2/4 before:left-1/2 before:top-1/2 before:translate-y-[-50%] before:translate-x-[-50%] before:rounded-full group-hover:before:bg-main";

  const handleFilterChange = (filterCategory: string) =>
    onFilterChange?.(filterCategory);

  return (
    <div className="mb-5 py-5 border-b-[1px]">
      <div className="flex">
        <h3>Xếp theo: </h3>
        <ul className="flex">
          {listFilter.map(({ id, filterCategory, filterName }) => (
            <li
              key={id}
              onClick={() => {
                handleFilterChange(filterCategory);
                setIndex(id);
              }}
              className="pr-2 font-medium flex cursor-pointer group"
            >
              <i
                className={`${customeCheckBox} ${beforeCustomeCheckBox} ${id === index ? "border-[#916841] before:bg-main" : ""}`}
              ></i>
              <span className="ml-1">{filterName}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
