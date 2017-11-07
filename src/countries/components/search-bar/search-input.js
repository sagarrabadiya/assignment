import React from "react";
import PropTypes from "prop-types";
import SearchInputWrapper from "./search-input-wrapper";
import SearchIcon from "./search.svg";
import CloseIcon from "./close-icon";

const SearchInput = props => (
  <SearchInputWrapper>
    <img
      alt="Search"
      style={{ position: "absolute", top: "5px", marginLeft: "10px" }}
      src={SearchIcon}
      width="20"
      heigth="20"
    />
    <input
      ref={r => r && r.focus()}
      style={{ padding: "5px 35px" }}
      type="text"
      onKeyUp={e =>
        e.key === "Escape" && props.onHideSearch && props.onHideSearch()}
      onChange={e => props.onChange(e.target.value)}
    />
    <CloseIcon onClick={props.onHideSearch && props.onHideSearch}>
      &times;
    </CloseIcon>
  </SearchInputWrapper>
);

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onHideSearch: PropTypes.func
};

export default SearchInput;
