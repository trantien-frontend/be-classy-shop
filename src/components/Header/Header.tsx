import {} from "react";
import logo from "../../assets/images/be-classy-logo.png";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { category } from "../../apis/CategoryApi";
import { Menu } from "./components/Menu/Menu";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  const { data, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: category.getAll,
  });

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
            <ul className="flex items-center">
              <li className="hidden lg:block">
                <a className="uppercase hover:text-main" href="">
                  tài khoản
                </a>
              </li>
              <li className="flex items-center ml-6 hover:text-main">
                <a className="uppercase" href="">
                  giỏ hàng
                </a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </span>
              </li>
              <li className="search ml-4 hover:text-main cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <nav>
          <div className="container mx-auto">
            {!isPending && <Menu listCategory={data?.data} />}
          </div>
        </nav>
      </div>
    </header>
  );
}
