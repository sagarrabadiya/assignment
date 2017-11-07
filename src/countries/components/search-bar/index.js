import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchWrapper from "./search-bar-wrapper";
import SearchButton from "./search-button";
import SearchIcon from "./search.svg";
import SearchInput from "./search-input";

class SearchBar extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  };

  state = {
    showSearchInput: false
  };

  showSearchInput = () => this.setState({ showSearchInput: true });

  hideSearchInput = () => {
    this.setState({ showSearchInput: false });
    this.props.onChange("");
  };

  render() {
    const props = this.props;
    const { showSearchInput } = this.state;
    return (
      <SearchWrapper>
        {!showSearchInput && (
          <div style={{ padding: "5px" }}>
            <b style={{ padding: "10px" }}>{props.title}</b>
            <SearchButton type="button" onClick={this.showSearchInput}>
              <img alt="Search" src={SearchIcon} width="20" heigth="20" />
            </SearchButton>
          </div>
        )}
        {showSearchInput && (
          <SearchInput {...props} onHideSearch={this.hideSearchInput} />
        )}
      </SearchWrapper>
    );
  }
}

export default SearchBar;
