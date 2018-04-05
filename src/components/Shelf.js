import React, { Component } from 'react';
import '../App.css'
import Book from './Book.js'

class Shelf extends Component {

  render () {

    const { books } = this.props
    const { title } = this.props //added to allow addition of shelfs in a user wants.

    console.log('books', books)
    console.log('shelf name', title)

    return (
      <div>
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">{ title }</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {books.map(({authors, imageLinks, title, shelf}) => (
                    <Book authors={authors} imageLinks={imageLinks} title={title} shelf={shelf} />
                  )
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
