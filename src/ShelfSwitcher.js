import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfSwitcher extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    changeToShelf: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { value: this.props.shelf };
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.state.value}
          onChange={e => {
            this.props.changeToShelf({
              book: this.props.book,
              shelf: e.target.value
            });
          }}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want To Read</option>
          <option value="read">Already Read It</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfSwitcher;
