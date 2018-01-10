import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route, Link } from 'react-router-dom';
import ListBooks from './ListBooks';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path="/search" render={() => <Search />} />
        <Route exact path="/" render={() => <ListBooks books={books} />} />
      </div>
    );
  }
}

export default BooksApp;
