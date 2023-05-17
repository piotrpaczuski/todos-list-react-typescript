import { useHistory, useLocation } from "react-router-dom";

interface QueryParam {
  key: string;
  value: string;
}

export const useQueryParameters = (searchQueryParamsName: string) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(searchQueryParamsName);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return ({ key, value }: QueryParam) => {
    const searchParams: URLSearchParams = new URLSearchParams(location.search);
    value ? searchParams.set(key, value) : searchParams.delete(key);

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
