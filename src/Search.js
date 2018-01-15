import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import sortBy from 'sort-by';

class Search extends Component {
  state = {
    query: '',
    searchResult: []
  };

  updateQuery = query => {
    this.setState({ query });
    this.searchBooks(query);
  };

  updateSearchResult = value => {
    this.setState({
      searchResult: value
    });
  };

  searchBooks = query => {
    if (query) {
      BooksAPI.search(query, 20)
        .then(books => {
          const checkedBooks = Array.isArray(books) ? books : [];
          this.updateSearchResult(checkedBooks);
        })
        .catch(this.updateSearchResult([]));
    } else {
      this.updateSearchResult([]);
    }
  };

  render() {
    const { updateBookShelf } = this.props;
    const { query, searchResult } = this.state;
    searchResult.sort(sortBy('title'));

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResult.map(book => (
              <li key={book.id}>
                <Book book={book} updateBookShelf={updateBookShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  books: PropTypes.array.isRequired
};

export default Search;
