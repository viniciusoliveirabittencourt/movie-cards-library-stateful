import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.modifiState = this.modifiState.bind(this);
  }

  modifiState({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.modifiState }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.modifiState }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.modifiState }
        />
        <AddMovie />
      </main>
    );
  }
}

export default MovieLibrary;
