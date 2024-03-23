import { useSearchParams } from "react-router-dom";

export function userQueryParams() {
  const [searchParams] = useSearchParams();
  return Object.fromEntries([...searchParams]);
}
