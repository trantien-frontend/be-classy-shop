import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { userQueryParams } from "../../hook/useQueryParams";

import queryString from "query-string";

import { productApi } from "../../apis";
import { Breadcrumb } from "../../components";
import { Product } from "../../Feature/ProductFeature/Components/Product/Product";

export function Search() {
  const searchParamObject = userQueryParams();
  const navigate = useNavigate();

  const searchTerm = { q: searchParamObject.q || undefined };
  const [value, setValue] = useState<string>(searchTerm.q || "");

  const { data } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => productApi.getProductByProductType(searchTerm),
    enabled: !!searchTerm.q,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newSearchTerm = { ...searchTerm, q: value };
    navigate({
      pathname: "/search",
      search: queryString.stringify(newSearchTerm),
    });
    setValue("");
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div>
      <Breadcrumb pathBasdeSecond="Kết quả tìm kiếm" />

      <div className="container">
        <div className="py-10">
          {!data && !searchTerm.q && (
            <>
              <h3 className="text-2xl font-normal text-center uppercase">
                Nhập từ khóa tìm kiếm sản phẩm
              </h3>
              <form
                className="mt-5 text-center flex items-center justify-center"
                onSubmit={(e) => handleSubmit(e)}
              >
                <input
                  className="text-sm font-light border-[1px] p-[10px] w-full sm:w-[50%] relative outline-none focus:border-gray-500 rounded-sm focus: shadow-sm"
                  type="text"
                  placeholder="Bạn cần tìm kiếm gì hôm nay"
                  value={value}
                  onChange={(e) => handleValueChange(e)}
                />
                <span>
                  <button type="submit" className="py-[12px] px-[20px] bg-main">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </span>
              </form>
            </>
          )}

          {data && data.data.length <= 0 && (
            <>
              <h3 className="text-2xl font-normal text-center uppercase">
                không tìm thấy bất kỳ kết quả nào với từ khóa trên
              </h3>
              <form
                className="mt-5 text-center flex items-center justify-center"
                onSubmit={(e) => handleSubmit(e)}
              >
                <input
                  className="text-sm font-light border-[1px] p-[10px] w-full sm:w-[50%] relative outline-none focus:border-gray-500 rounded-sm focus: shadow-sm"
                  type="text"
                  placeholder="Bạn cần tìm kiếm gì hôm nay"
                  value={value}
                  onChange={(e) => handleValueChange(e)}
                />
                <span>
                  <button type="submit" className="py-[12px] px-[20px] bg-main">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </span>
              </form>
            </>
          )}

          {data && data.data.length > 0 && (
            <div className="grid grid-cols-5 gap-6">
              {data &&
                data.data.map((product) => (
                  <div key={product.id}>
                    <Product product={product} />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
