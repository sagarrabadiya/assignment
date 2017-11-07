import React, { Component } from "react";
import { connect } from "react-redux";
import Chunk from "lodash/chunk";
import Range from "lodash/range";
import UUID from "uuid/v4";
import FlexWrapper from "ui/wrappers/flex-wrapper";
import Row from "ui/wrappers/row";
import Button from "ui/elements/button";
import {
  removeCountry,
  addCountry,
  updateCountry
} from "redux/modules/countries";
import SearchPanel from "./components/search-bar";
import CountryItem from "./components/country-item";

class Countries extends Component {
  state = {
    activeItem: null,
    searchTerm: null,
    countriesList: []
  };

  filterCountries(countryList = [], term = null) {
    if (term === null) {
      term = this.state.searchTerm || "";
    }
    return countryList
      .filter(({ name }) => name.toLowerCase().indexOf(term.toLowerCase()) >= 0)
      .slice(0, 48); // to fill maximum 48 grid
  }

  componentWillMount() {
    if (this.props.countries && this.props.countries.length) {
      this.setState({
        activeItem: this.props.countries[0],
        countriesList: this.props.countries
      });
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.countries) {
      const newState = {};
      if (!this.state.activeItem) {
        newState.activeItem = newProps.countries[0];
      }
      newState.countriesList = this.filterCountries(newProps.countries);
      this.setState(newState);
    }
  }

  deleteItem = () => {
    if (
      // eslint-disable-next-line
      confirm(`Are you sure to delete country ${this.state.activeItem.name}?`)
    ) {
      const newActiveItem = this.props.countries.filter(
        ({ id }) => id !== this.state.activeItem.id
      )[0];
      this.props.removeCountry(this.state.activeItem);
      this.setState({ activeItem: newActiveItem });
    }
  };

  addCountry = () => {
    const newItem = { id: UUID(), name: "New_Country" };
    this.props.addCountry(newItem);
    this.setState({ activeItem: newItem });
  };

  updateCountry = country => this.props.updateCountry(country);

  searchTermChanged = searchTerm =>
    this.setState({
      countriesList: this.filterCountries(this.props.countries, searchTerm),
      searchTerm
    });

  render() {
    const { activeItem, countriesList } = this.state;
    return (
      <Row style={{ minHeight: "calc(100vh - 60px)" }}>
        <SearchPanel onChange={this.searchTermChanged} title="My Items" />
        <Row style={{ maxHeight: "calc(100vh - 150px)", overflowY: "scroll" }}>
          {Chunk(
            countriesList.concat(Range(1, 48 - countriesList.length)),
            4
          ).map((chunk, i) => (
            <Row key={i}>
              {chunk.map(c => (
                <CountryItem
                  key={c.id || c}
                  onClick={c.id && (() => this.setState({ activeItem: c }))}
                  active={activeItem && c.id === activeItem.id}
                  country={c.id && c}
                  onUpdate={c.id && this.updateCountry}
                />
              ))}
            </Row>
          ))}
        </Row>
        <Row style={{ position: "absolute", bottom: 0 }}>
          <FlexWrapper>
            <Button onClick={this.addCountry} bg="#6a6" fg="#fff" block>
              New
            </Button>
            <Button bg="#a66" onClick={this.deleteItem} fg="#fff" block>
              Delete
            </Button>
          </FlexWrapper>
        </Row>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  countries: state.countries
});

const mapDispatchToProps = {
  removeCountry,
  addCountry,
  updateCountry
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
