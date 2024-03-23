import { useEffect, useState } from "react";
export interface ProductFilterProps {
  sortBy?: string | number;
  onFilterChange: (filter: string) => void;
}
interface Filter {
  id: number;
  category: string;
  type: string;
}

const initFilters: Filter[] = [
  {
    id: 1,
    category: "Tên A-Z",
    type: "productName:asc",
  },
  { id: 2, category: "Tên Z-A", type: "productName:dsc" },
  {
    id: 3,
    category: "Giá thấp đến cao",
    type: "productPrice:asc",
  },
  {
    id: 4,
    category: "Giá cao đến thấp",
    type: "productPrice:dsc",
  },
];

export function ProductFilter({ onFilterChange, sortBy }: ProductFilterProps) {
  const [listFilter, setListFilter] = useState<Filter[]>(initFilters);

  const customeCheckbox = `check-box-custome block w-5 h-5 border-[1px] rounded-full relative group-hover:border-[#916841]`;
  const customeCheckboxBefore =
    "before:content[''] before:absolute before:w-2/4 before:h-2/4 before:left-1/2 before:top-1/2 before:translate-y-[-50%] before:translate-x-[-50%] before:rounded-full group-hover:before:bg-main";

  const handleFilterChange = (filterCategory: string) => {
    onFilterChange?.(filterCategory);
  };

  const handleFilterActive = (id: number) => {
    const updateFilters = listFilter.map((filter) => {
      return { ...filter, isActive: filter.id === id };
    });
    setListFilter(updateFilters);
  };

  return (
    <div className="mb-5 py-5 border-b-[1px]">
      <div className="flex">
        <h3 className="pr-3">Xếp theo: </h3>
        <ul className="flex">
          {listFilter.map(({ id, category, type }) => (
            <li
              key={id}
              onClick={() => {
                handleFilterChange(type);
                handleFilterActive(id);
              }}
              className="pr-2 font-normal flex cursor-pointer group"
            >
              <i
                className={`${customeCheckbox} ${customeCheckboxBefore} ${type === sortBy ? "border-[#916841] before:bg-main" : ""}`}
              ></i>
              <span className="ml-1">{category}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
