import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  constructor() {
    super();
    this.filtraOsFilmes = this.filtraOsFilmes.bind(this);
  }

  filtraOsFilmes() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.props;
    if (bookmarkedOnly === true && selectedGenre === '') {
      return movies.filter(({ title, subtitle, storyline }) => title.includes(searchText)
        || subtitle.includes(searchText) || storyline.includes(searchText))
        .filter(({ bookmarked }) => bookmarked === true)
        .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    } if (bookmarkedOnly === true && selectedGenre !== '') {
      return movies.filter(({ title, subtitle, storyline }) => title.includes(searchText)
        || subtitle.includes(searchText) || storyline.includes(searchText))
        .filter(({ bookmarked }) => bookmarked === true)
        .filter(({ genre }) => genre === selectedGenre)
        .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    } if (bookmarkedOnly === false && selectedGenre !== '') {
      return movies.filter(({ title, subtitle, storyline }) => title.includes(searchText)
        || subtitle.includes(searchText) || storyline.includes(searchText))
        .filter(({ genre }) => genre === selectedGenre)
        .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    }
    return movies.filter(({ title, subtitle, storyline }) => title.includes(searchText)
        || subtitle.includes(searchText) || storyline.includes(searchText))
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
  }

  render() {
    return (
      <div data-testid="movie-list" className="movie-list">
        { this.filtraOsFilmes() }
      </div>
    );
  }
}

MovieList.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
