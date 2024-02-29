import {} from "react";
import { SubCategory } from "../Menu/Menu";
import { Link } from "react-router-dom";

export interface SubMenuProps {
  isHover: boolean;
  subCategory: SubCategory[];
}

export function SubMenu({ isHover, subCategory }: SubMenuProps) {
  const style: string =
    "sub-menu absolute bg-white text-left w-full font-medium duration-1000 z-50 ";

  return (
    <ul
      className={
        isHover
          ? `${style} top-[100%] visible opacity-1`
          : `${style} top-[200%] invisible opacity-0`
      }
    >
      {subCategory?.map((subCategory) => (
        <li key={subCategory.id}>
          <Link
            className="hover:text-main block py-2.5 px-[5px] border-b-[1px]"
            to={`/${subCategory.subCategoryName}`}
          >
            {subCategory.subCategoryName}
          </Link>
        </li>
      ))}
    </ul>
  );
}
