import React, { Component } from 'react';
import MovieSearchInput from './MovieSearchInput';
import MovieList from './MovieList';

// This component will handle the actual API call to the OMDB database
class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: true
    };

    this.performSearch = this.performSearch.bind(this);
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch(query) {
    fetch(`http://www.omdbapi.com/?t=${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          results: responseData,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="movie-search">
        <MovieSearchInput onSearch={this.performSearch} />
        <div className="search-results">
          {(this.state.loading) ? <p>Loading...</p> : <MovieList results={this.state.results} /> }
        </div>
      </div>
    );
  }
}

export default MovieSearch;
