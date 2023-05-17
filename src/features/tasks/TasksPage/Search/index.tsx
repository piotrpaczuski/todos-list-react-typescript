import { searchQueryParamsName } from "../searchQueryParamsName";
import {
  useQueryParameters,
  useReplaceQueryParameter,
} from "../queryParameters";

import { StyledInput, StyledWrapper } from "../../../styledWrapper";
import { ChangeEventHandler } from "react";

const Search = () => {
  const query = useQueryParameters(searchQueryParamsName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    replaceQueryParameter({
      key: searchQueryParamsName,
      value: event.target.value.trim() ? event.target.value : "",
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
  );
};

export default Search;
