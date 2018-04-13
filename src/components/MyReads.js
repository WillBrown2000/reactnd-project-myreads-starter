import React, { Component } from 'react'
import Shelf from './Shelf.js'
import '../App.css'
import { Link } from 'react-router-dom'



//stopped here.  Need to refactor allBooks, parse in to data to send to UI

class MyReads extends Component {

  render() {

    const books  = this.props.state.userBooks
    console.log('books',books)
    const currentlyReadingBooks = books.filter( (book) =>  book.shelf === 'currentlyReading' )
    const wantToReadBooks = books.filter( (book) =>  book.shelf === 'wantToRead' )
    const readBooks = books.filter( (book) =>  book.shelf === 'read' )

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
            <Shelf books={ currentlyReadingBooks } title="Currently Reading" updateState={this.props.updateState} />
            <Shelf books={ wantToReadBooks } title="Want To Read" updateState={this.props.updateState} />
            <Shelf books={ readBooks } title="Read" updateState={this.props.updateState} />
        <div className="open-search">
          <Link onClick={()=> this.props.updateFromSearchPage()} to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}
export default MyReads
