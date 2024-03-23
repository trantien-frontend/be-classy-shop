import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";

import { productApi } from "../../../../apis/ProductApi";
import {
  AsideCategory,
  ProductFilter,
  ProductList,
  Pagination,
} from "../../Components";
import { isUndefined, omitBy } from "lodash";
import queryString from "query-string";
import { userQueryParams } from "../../../../hook/useQueryParams";

function handleURL(path: string): string {
  const listCategory: string[] = ["dress%20shoes", "accessories"];
  const isCategoryURL = listCategory.includes(path.slice(1));

  return isCategoryURL
    ? `products/category${path}`
    : `products/productType${path}`;
}

export function ProductPage() {
  const navigate = useNavigate();
  const locatiom = useLocation();

  const url = handleURL(locatiom.pathname);

  const searchParamObject = userQueryParams();

  const [params, setParams] = useState(
    omitBy(
      {
        page:
          Number(searchParamObject.page) < 0
            ? 0
            : Number(searchParamObject.page) - 1 || 0,
        limit: Number(searchParamObject.limit) || 3,
        sortby: searchParamObject.sortby,
      },
      isUndefined,
    ),
  );

  const { data, isPending } = useQuery({
    queryKey: ["products", url, params],
    queryFn: () => productApi.getAll(url, { ...params }),
  });

  const handelPageChange = (_page: number) => {
    const newParams = { ...params, page: _page };
    setParams(newParams);
    navigate({
      pathname: locatiom.pathname,
      search: queryString.stringify({ ...newParams, page: _page + 1 }),
    });
  };

  const handleFilterChange = (filter: string) => {
    setParams({ ...params, sortby: filter });

    const newParams = {
      ...params,
      sortby: filter,
      page: Number(params.page) + 1,
    };

    navigate({
      pathname: locatiom.pathname,
      search: queryString.stringify({ ...newParams }),
    });
  };

  return (
    <section className="py-5">
      <div className="container mx-auto">
        <div className="flex gap-2">
          <div className="aside-category basis-1/5">
            <AsideCategory />
          </div>

          <div className="product-list basis-4/5">
            <ProductFilter
              onFilterChange={handleFilterChange}
              sortBy={params?.sortby}
            />
            {!isPending && data && (
              <ProductList products={data?.data?.content} />
            )}

            {!isPending && data?.data.pageable && (
              <Pagination
                pagination={data?.data.pageable}
                onClick={(_page) => handelPageChange(_page)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
