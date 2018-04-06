import React, { Component } from 'react';
import '../App.css'
import Book from './Book.js'

class Shelf extends Component {

  render () {

    const {title, books } = this.props
    const updateState = this.props.updateMyReads


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
              {books.map(({authors, imageLinks, title, shelf, id}, j) => (
                    <Book key={j} authors={authors} id={id}imageLinks={imageLinks} title={title} shelf={shelf} updateState={updateState} />
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
