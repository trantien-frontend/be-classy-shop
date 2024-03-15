import { useState } from "react";
import { Category, ProductType } from "../../../../types";
import { NavLink } from "react-router-dom";
import { SubMenu } from "../SubMenu/SubMenu";
import "./Style.scss";

export interface NavigationProps {
  listCategory: Category[] | undefined;
}

export interface SubCategory {
  id?: number;
  subCategoryName: string;
}

export interface SubCategories {
  subCategory: SubCategory[];
}

export function Menu({ listCategory }: NavigationProps) {
  const [index, setIndex] = useState<number | null>(null);

  const handleMouseMove = (index: number) => setIndex(index);
  const handleMouseOut = () => setIndex(null);

  const listSubCategory: SubCategories[] = [
    {
      subCategory: [
        { id: 1, subCategoryName: "oxford" },
        { id: 2, subCategoryName: "loafer" },
        { id: 3, subCategoryName: "derby" },
        { id: 4, subCategoryName: "boots" },
      ],
    },
    {
      subCategory: [
        { id: 1, subCategoryName: "belt" },
        { id: 2, subCategoryName: "wallet" },
      ],
    },
    { subCategory: [] },
    { subCategory: [] },
    { subCategory: [] },
  ];

  const newListCateogy = listCategory?.map((category, index) => {
    return {
      ...category,
      ...listSubCategory[index],
    };
  });

  return (
    <>
      <ul className="nav flex items-center border-t-[0.5px]">
        {newListCateogy?.map((category, i) => (
          <li
            onMouseMove={() => handleMouseMove(i)}
            onMouseOut={handleMouseOut}
            key={category.id}
            className="py-2 grow uppercase relative text-base text-center tracking-widest"
          >
            <NavLink
              className={({ isActive }) =>
                `font-normal ${isActive ? "text-main" : "hover:text-main"}`
              }
              to={`/${category.categoryName}`}
            >
              {category.categoryName}
            </NavLink>
            <SubMenu isHover={index === i} subCategory={category.subCategory} />
          </li>
        ))}
      </ul>
    </>
  );
}
