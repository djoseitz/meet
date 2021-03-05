import React, { Component } from 'react';


class CitySearch extends Component {
  state = {
    locations: this.props.locations,
    query: '',
    suggestions: [],
    showSuggestions: false,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: '',
      warningText: '',
    });
    this.props.updateEvents(suggestion);
  };


  render() {
    return (
      <div className="CitySearch">
        <input 
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => { this.setState({ showSuggestions: true }) }}
        />
        <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li key={suggestion}>
              {suggestion}
            </li>
          ))}
          <li key='all'>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;