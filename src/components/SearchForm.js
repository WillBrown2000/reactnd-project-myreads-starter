import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../BooksAPI.js'
import Book from './Book.js'
import _ from 'lodash'

class SearchForm extends Component {

  render() {

    const { updateState, searchBooks, query, searchHandleChange, updateSearchBooksSelector } = this.props

    return (
      <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" onClick={()=> updateState()} to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={query} onChange={searchHandleChange}/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
            <div>
              <ol className="books-grid">
              {(searchBooks.length > 0) ?
                (searchBooks.map((book, j) => (
                  <Book key={j} book={book} value={query} updateSearchBooksSelector={updateSearchBooksSelector} updateState={updateState} />))):
                (<div>These aren't the books you're looking for.  Try a different search!</div>)
              }
              </ol>
            </div>
          </div>
      </div>
    )
  }
}

export default SearchForm
