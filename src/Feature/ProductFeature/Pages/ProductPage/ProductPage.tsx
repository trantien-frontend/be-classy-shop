import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { productApi } from "../../../../apis/ProductApi";
import {
  AsideCategory,
  ProductFilter,
  ProductList,
  Pagination,
} from "../../Components";
import { Pagination as PaginationType, Product } from "../../../../types";

function handleURL(path: string): string {
  const listCategory: string[] = ["dress%20shoes", "accessories"];
  const isCategoryURL = listCategory.includes(path.slice(1));
  return isCategoryURL
    ? `products/category${path}`
    : `products/productType${path}`;
}

export function ProductPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamObject = Object.fromEntries([...searchParams]);

  const url = handleURL(pathname);

  const [params, setParams] = useState({
    page: Number(searchParamObject.page) || 0,
    limit: Number(searchParamObject.limit) || 3,
    sortby: searchParamObject.sortby || "",
  });

  const { data, isPending } = useQuery({
    queryKey: ["products", url, params],
    queryFn: () => productApi.getAll("/products", { ...params }),
  });

  const handelPageChange = (_page: number) => {
    // setParams({ ...params, page: _page });
  };

  const handleFilterChange = (filter: string) => {
    // setParams({ ...params, sortby: filter });
    // setSearchParams({
    //   page: `${params.page}`,
    //   limit: `${params.limit}`,
    //   sortby: params.sortby,
    // });
  };

  return (
    <div>
      <section className="py-5">
        <div className="container mx-auto">
          <div className="flex gap-2">
            <div className="aside-category basis-1/5">
              <AsideCategory />
            </div>
            <div className="product-list basis-4/5">
              <ProductFilter onFilterChange={handleFilterChange} />
              {!isPending && <ProductList products={data?.data?.content} />}

              {!isPending && (
                <Pagination
                  pagination={data?.data.pageable}
                  onClick={(_page) => handelPageChange(_page)}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
