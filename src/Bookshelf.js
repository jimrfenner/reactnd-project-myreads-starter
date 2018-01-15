import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Bookshelf extends Component {
  render() {
    const { title, groupBooks } = this.props;

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {groupBooks.map(book => (
                <li key={book.id}>
                  <Book book={book} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  groupBooks: PropTypes.array.isRequired
};

export default Bookshelf;
