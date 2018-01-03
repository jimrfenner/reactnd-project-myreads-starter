import React from 'react';
import ShelfSwitcher from './ShelfSwitcher';

function Book(props) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" />
        </div>
        <div className="book-title" />
        <div className="book-authors" />
      </div>
    </li>
  );
}
