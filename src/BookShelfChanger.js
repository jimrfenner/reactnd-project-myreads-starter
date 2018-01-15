import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = props => {
  const { bookInShelf, updateBookShelf } = props;

  return (
    <div className="book-shelf-changer">
      <select
        value={bookInShelf.shelf}
        onChange={event => updateBookShelf(bookInShelf, event.target.value)}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  bookInShelf: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired
};

export default BookShelfChanger;
