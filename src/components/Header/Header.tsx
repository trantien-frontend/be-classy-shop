import * as React from "react";
import logo from "../../assets/images/be-classy-logo.png";
import { Link, NavLink } from "react-router-dom";

interface HeaderProps {}

interface Category {
  categoryName: string;
  routerName: string;
}

export function Header({}: HeaderProps) {
  const listCategory: Category[] = [
    { categoryName: " dress shoes", routerName: "/feature-product" },
    { categoryName: " accessories", routerName: "/accessories" },
    { categoryName: " collection", routerName: "/collection" },
    { categoryName: " stores", routerName: "/" },
    { categoryName: " service", routerName: "/" },
  ];

  return (
    <header>
      <div className="container mx-auto">
        <div className="header-top flex justify-between items-center px-2.5 py-2.5">
          <div className="hot-line">
            <span className="uppercase text-sm">hotline: </span>
            <a
              href="tel:0963598933"
              className="hover:text-main hover:ease-in-out text-base font-bold"
            >
              0963 598 933
            </a>
          </div>
          <h1 className="logo">
            <Link to="/">
              <img src={logo} className="w-4/5" alt="" />
            </Link>
          </h1>
          <div>
            <ul>
              <li className="hidden lg:block">
                <a href="">tài khoản</a>
              </li>
              <li>
                <a href="">giỏ hàng</a>
              </li>
              <li>search</li>
            </ul>
          </div>
        </div>
        <nav className="header-bottom py-1 border-t-[1px] px-20">
          <ul className="flex justify-between items-center">
            {listCategory.map((category, index) => (
              <li key={index} className="m-2 uppercase text-lg tracking-widest">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-sky-400" : "")}
                  to={`${category.routerName}`}
                >
                  {category.categoryName}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
