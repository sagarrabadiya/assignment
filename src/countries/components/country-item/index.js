import React from "react";
import PropTypes from "prop-types";
import CountryImg from "./country-img";
import EarthImg from "./earth.png";
import CountryWrapper from "./country-item-wrapper";
import ImgWrapper from "./img-wrapper";
import CountryTitle from "./country-title";

const CountryItem = ({ country, active, onUpdate, onClick }) => (
  <CountryWrapper>
    <ImgWrapper onClick={onClick} active={active}>
      {country &&
        country.id && <CountryImg alt="Country Image" src={EarthImg} />}
    </ImgWrapper>
    {country &&
      country.id && (
        <CountryTitle
          onClick={onClick}
          onUpdate={name => onUpdate({ ...country, name })}
          title={country.name}
        />
      )}
  </CountryWrapper>
);

CountryItem.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }),
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default CountryItem;
