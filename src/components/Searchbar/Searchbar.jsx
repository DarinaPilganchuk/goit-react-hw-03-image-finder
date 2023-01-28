import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';

import { ImSearch }  from 'react-icons/im';


export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
  
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return alert('Please enter something :)');
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span>
              <ImSearch size={25} stroke="#3f51b5" />
            </span>
          </button>

          <input
            className="SearchForm-input "
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};


export default Searchbar;