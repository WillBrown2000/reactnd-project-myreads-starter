import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Search extends Component {

    state = {
      query: '',
      books: []
    }
    updateQuery = (query) => {
      this.setState(() => ({
        query: query.trim()
      }))
    }
render() {

  const books = this.state.books
  const query = this.state.query
  const showingContacts = query === ''
    ? books
    : books.filter((c) => (
        c.name.toLowerCase().includes(query.toLowerCase())
    ))

  return (
    <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default Search
