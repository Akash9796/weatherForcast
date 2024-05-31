import styled from "styled-components";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchLocation } from "../redux/carts/locationSlice";

// Styled Components
const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 5px 10px;
  background-color: #fff;
`;

const SearchIcon = styled(FaSearch)`
  color: #1c1c1c;
  margin-right: 8px;
  cursor: pointer;
`;

const ClearIcon = styled(FaTimes)`
  color: #1c1c1c;
  cursor: pointer;
`;
const ClearWrapper = styled.div`
  width: 10px;
  height: 10px;
  background: #e1e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const Input = styled.input`
  flex: 1;
  width: 50%;
  border: none;
  outline: none;
  font-size: 13px;
  margin-right: 10px;
  background-color: transparent; // or #fff if needed
  color: black;
  padding: 5px; // adjust padding as needed
  &::placeholder {
    color: black;
  }
`;

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
  };
  const handleSearch = () => {
    dispatch(searchLocation(query));
    setQuery("");
  };

  return (
    <SearchBarWrapper>
      <SearchIcon onClick={handleSearch} />
      <Input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
      />
      <ClearWrapper>
        <ClearIcon onClick={handleClear} />
      </ClearWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
