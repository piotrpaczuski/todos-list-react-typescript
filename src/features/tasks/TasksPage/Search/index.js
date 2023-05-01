import { StyledInput, StyledWrapper } from "../../../styledWrapper";
import searchQueryParamsName from "../searchQueryParamsName";
import { useQueryParameters, useReplaceQueryParameter } from "../queryParameters";

export default () => {
    const query = useQueryParameters(searchQueryParamsName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamsName,
            value: target.value.trim() ? target.value : undefined
        });
    };

    return (
        <StyledWrapper>
            <StyledInput
                type={"text"}
                placeholder="Jakie zadanie chcesz znaleźć?"
                value={query || ""}
                onChange={onInputChange}
            />
        </StyledWrapper>
    )
};