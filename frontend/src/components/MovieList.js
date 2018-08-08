import React, { Component } from 'react';

class MovieList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul>
        {this.props.results.map((result, index) =>
          <li key={index}>
            {result.Title}
          </li>
        )}
      </ul>
    );
  }
}
export default MovieList;
