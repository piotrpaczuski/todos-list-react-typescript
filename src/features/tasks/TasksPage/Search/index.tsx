import React from "react";

import searchQueryParamsName from "../searchQueryParamsName";
import {
  useQueryParameters,
  useReplaceQueryParameter,
} from "../queryParameters";

import { StyledInput, StyledWrapper } from "../../../styledWrapper";

interface HandleChange {
  target: HTMLInputElement | any;
}

const Search: React.FC = () => {
  const query = useQueryParameters(searchQueryParamsName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = (event: HandleChange): void => {
    replaceQueryParameter({
      key: searchQueryParamsName,
      value: event.target.value.trim() ? event.target.value : undefined,
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
