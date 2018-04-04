import React, { Component } from 'react';
import '../App.css'
import Books from './Books.js'

class Shelf extends Component {

  render () {

    const { books } = this.props.books
    const { title } = this.props //added to allow addition of shelfs in a user wants.

    return (
      <div>
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">{ title }</h2>
            <div className="bookshelf-books">
              <Books books={ books } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
