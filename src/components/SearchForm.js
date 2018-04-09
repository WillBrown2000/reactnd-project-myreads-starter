import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../BooksAPI.js'
import Book from './Book.js'
import _ from 'lodash'

class SearchForm extends Component {

  render() {

    const { updateState, books, query, searchHandleChange } = this.props

    return (
      <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={query} onChange={searchHandleChange}/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
            <div>
              <ol className="books-grid">
              {(this.props.books.length > 0) ?
                (this.props.books.map((book, j) => (
                  <Book key={j} book={book} updateState={updateState} />))):
                (<div>"These aren't the books you're looking for.  Try a different search!"</div>)
              }
              </ol>
            </div>
          </div>
      </div>
    )
  }
}

export default SearchForm
