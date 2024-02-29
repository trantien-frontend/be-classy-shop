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
        <nav>
          <div className="container mx-auto">
            {!isPending && <Menu listCategory={data?.data} />}
          </div>
        </nav>
      </div>
    </header>
  );
}
