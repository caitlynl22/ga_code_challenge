import React, { Component } from 'react';

// Handles user input to be sent in API call to OMDB database (MovieSearch component)
class MovieSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };

    this.searchMovies = this.searchMovies.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  searchMovies(event) {
    this.setState({
      query: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.query.value);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="movie-search-form" onSubmit={this.handleSubmit}>
        <label for="search-movies">Search Movies:</label>
        <input
          onChange={this.searchMovies}
          type="search"
          id="search-movies"
          name="q"
          ref={(input) => this.query = input} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default MovieSearchInput;
