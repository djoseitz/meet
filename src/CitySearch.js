import React, { Component } from 'react';
import { InfoAlert } from './Alert';
import PropTypes from 'prop-types';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: false,
    locations: this.props.locations,
    infoText: '',
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
  };

  // Displays suggestions based on user input (autocomplete feature)
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });

    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: `Sorry, we could not find "${value}". Please try another city`,
        showSuggestions: false,
      });
    } else {
      this.setState({
        infoText: '',
        query: value,
        suggestions,
      });
    }
  };

  render() {
    const { query, suggestions, showSuggestions, infoText } = this.state;

    return (
      <div className='CitySearch'>
        <label>Choose your nearest city</label>
        <input
          type='text'
          className='city'
          value={query}
          onChange={this.handleChange}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
        />
        <ul
          className='suggestions'
          style={showSuggestions ? {} : { display: 'none' }}
        >
          {suggestions.map((suggestion) => (
            <li
              id={suggestion}
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li key='all' onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
        </ul>
        <InfoAlert text={infoText} />
      </div>
    );
  }
}

CitySearch.propTypes = {
  locations: PropTypes.array.isRequired,
  updateEvents: PropTypes.func.isRequired,
};

export default CitySearch;
