import styled from "styled-components";

import { FilterIcon, SearchIcon } from "../../components/Icons";

const StyledSearchInput = styled.input`
  height: 40px;
`;

function SearchBar() {
  const handleFilter = () => {
    alert("Filter");
  };

  return (
    <div className="py-3 px-4 flex items-center">
      <div className="relative flex-1 mr-6">
        <SearchIcon className="absolute left-10px top-10px" />
        <StyledSearchInput
          className="pl-10 pr-3 py-2 rounded-lg bg-text-700 text-500 font-medium text-base w-full"
          placeholder="Search experiences"
        />
      </div>
      <FilterIcon className="mr-4" onClick={handleFilter} />
    </div>
  );
}

export default SearchBar;
