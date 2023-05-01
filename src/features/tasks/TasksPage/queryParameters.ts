import {useHistory, useLocation} from "react-router-dom";

interface QueryParam {
    key: string;
    value: string | null;
}

export const useQueryParameters = (searchQueryParamsName: string): string | null => {
    const location = useLocation();
    return new URLSearchParams(location.search).get(searchQueryParamsName);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return ({key, value}: QueryParam): void => {
        const searchParams: URLSearchParams = new URLSearchParams(location.search);
        value ? searchParams.set(key, value) : searchParams.delete(key);

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
};