import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameters = (searchQueryParamsName) => {
    const location = useLocation();
    return new URLSearchParams(location.search).get(searchQueryParamsName);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    const replaceQueryParameter = ({key, value}) => {
        const searchParams = new URLSearchParams(location.search);
        value ? searchParams.set(key, value) : searchParams.delete(key);

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };
    
    return replaceQueryParameter;
};