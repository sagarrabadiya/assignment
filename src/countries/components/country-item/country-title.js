import React, { Component } from "react";
import PropTypes from "prop-types";
import InputWrapper from "../search-bar/search-input-wrapper";
import CloseIcon from "../search-bar/close-icon";
import Link from "./link";

class CountryTitle extends Component {
  static propTypes = {
    onUpdate: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  state = {
    edit: false,
    title: null
  };

  componentWillMount() {
    this.setState({ title: this.props.title });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.title !== this.props.title) {
      this.setState({ title: newProps.title });
    }
  }

  editTitle = e => {
    e.preventDefault();
    this.setState({ edit: true });
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  handleChange = e => this.setState({ title: e.target.value });

  cancelEdit = e => this.setState({ title: this.props.title, edit: false });

  checkPressedKey = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.props.onUpdate(this.state.title);
      return this.setState({ edit: false });
    }
    if (e.key === "Escape") {
      e.preventDefault();
      this.cancelEdit(e);
    }
  };

  render() {
    const { edit, title } = this.state;
    return (
      <div>
        {edit ? (
          <InputWrapper>
            <input
              ref={r => r && r.focus()}
              style={{ padding: "5px" }}
              onKeyUp={this.checkPressedKey}
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <CloseIcon onClick={this.cancelEdit}>&times;</CloseIcon>
          </InputWrapper>
        ) : (
          <Link onClick={this.editTitle} href="#">
            {title}
          </Link>
        )}
      </div>
    );
  }
}

export default CountryTitle;
