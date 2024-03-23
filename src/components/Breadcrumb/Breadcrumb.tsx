import { Link } from "react-router-dom";

export interface BreadcrumbProps {
  pathBasdeFirst?: string;
  pathBasdeSecond?: string;
}

export function Breadcrumb({
  pathBasdeFirst,
  pathBasdeSecond,
}: BreadcrumbProps) {
  return (
    <div className="breadcrumb border-y-[0.5px]">
      <div className="container mx-auto">
        <ul className="flex items-center py-3">
          <li>
            <Link className="font-normal" to={"/"}>
              Trang chủ
            </Link>
          </li>

          {pathBasdeFirst && (
            <li className="font-normal">
              <span className="text-sm mx-2">{">"}</span>
              <Link
                className="uppercase hover:text-main"
                to={`/${pathBasdeFirst}`}
              >
                {pathBasdeFirst}
              </Link>
            </li>
          )}

          {pathBasdeSecond && (
            <li className="font-normal">
              <span className="text-sm mx-2">{">"}</span>
              <span className="uppercase font-bold text-main">
                {pathBasdeSecond}
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
