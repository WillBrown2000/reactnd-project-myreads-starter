import React, { Component } from 'react';
import '../App.css'
import Book from './Book.js'

class Shelf extends Component {

  render () {

    const {title, books, updateState } = this.props


    console.log('books', books)
    console.log('shelf name', title)
    console.log('from my reads updateMyReads', updateState)

    return (
      <div>
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">{ title }</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {books.map((book, j) => (
                    <Book key={j} book={book} updateState={updateState} />
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
