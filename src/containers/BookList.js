import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
          key={book.title}
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// this function is the glue between React and Redux
function mapStateToProps(state) {
  // what ever is returned is gonna show up as props inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the bookList container
function mapDispatchToProps(dispatch) {
  // when ever selectBook is called, the result should be passed to
  // all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote bookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as props
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
