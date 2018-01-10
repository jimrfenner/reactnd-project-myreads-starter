import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf />
        </div>
        <div className="open-search">
          <Link to="/search">Find a book</Link>
        </div>
      </div>
    );
  }
}

ListBooks.PropTypes = {
  books: PropTypes.array.isRequired
};

export default ListBooks;
