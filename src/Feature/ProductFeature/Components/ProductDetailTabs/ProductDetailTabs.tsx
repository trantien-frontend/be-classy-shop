import { NavLink, useLocation } from "react-router-dom";

function handlePathName(url: string): string {
  const listPath: string[] = ["dsc", "rate", "guide"];
  const isPath = listPath.find((path) => url.includes(path));
  return isPath ? url.slice(0, url.lastIndexOf("/")) : url;
}

export interface ProductDetailTabsProps {
  children: React.ReactElement | null;
}

export function ProductDetailTabs({ children }: ProductDetailTabsProps) {
  const { pathname } = useLocation();
  const path = handlePathName(pathname);
  return (
    <div>
      <ul className="tabs flex">
        <li>
          <NavLink className="pr-2 uppercase" to={`${path}/dsc`}>
            Mô tả sản phẩm
          </NavLink>
        </li>
        <li>
          <NavLink className="pr-2 uppercase" to={`${path}/rate`}>
            Đánh giá sản phẩm
          </NavLink>
        </li>
        <li>
          <NavLink className="pr-2 uppercase" to={`${path}/guide`}>
            Hướng dẫn chọn size
          </NavLink>
        </li>
      </ul>
      <div className="tab-content">{children}</div>
    </div>
  );
}
