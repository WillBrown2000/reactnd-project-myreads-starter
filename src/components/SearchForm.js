import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as api from '../BooksAPI.js'
import Book from './Book.js'
import _ from 'lodash'

class SearchForm extends Component {

  state = {

    query: '',
    books: [],
    validQuery: false,

  }

  handleChange = (event) => {

    let _query = event.target.value

    this.setState({

      query: _query || ''

    })

    api.search(_query).then( (searchBooks) => {

      let newBookList = []

      console.log('_query',_query)

      if (_query === '') {

        console.log('set books to []')

        this.setState({

        books: []

        })

        return false

      }

      api.getAll().then( (userBooks) => {

        searchBooks.forEach( (searchBook) => {

          let bookToAdd = {}

          userBooks.forEach( (userBook) => {

            if (userBook['id'] === searchBook['id']) {

              bookToAdd = Object.assign({}, userBook)

              }

          })

              if (bookToAdd.id === undefined) {

              bookToAdd = Object.assign(searchBook, {'shelf':'none'})

              }

              newBookList.push(bookToAdd)

        })

        this.setState({

          books: newBookList

        })

      })

    })

  }

  render() {

    return (
      <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChange}/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
            <div>
              <ol className="books-grid">
              {(this.state.books.length > 0) ?
                (this.state.books.map(({authors, imageLinks, title, shelf, id}, j) => (
                  <Book key={j} authors={authors} imageLinks={imageLinks} title={title} shelf={shelf} id={id} />))):
                (<div>"These aren't the books your looking for.  Try a different search!"</div>)
              }
              </ol>
            </div>
          </div>
      </div>
    )
  }
}

export default SearchForm
