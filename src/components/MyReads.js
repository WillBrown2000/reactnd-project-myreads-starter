import React, { Component } from 'react'
import Shelf from './Shelf.js'
import '../App.css'
import { Link } from 'react-router-dom'
import * as api from '../BooksAPI.js'


//stopped here.  Need to refactor allBooks, parse in to data to send to UI

class MyReads extends Component {

  state = {

    currentlyReadingBooks : [] ,
    wantToReadBooks : [] ,
    readBooks : [] ,
    loading: true

  }

  componentDidMount() {

    this.updateShelfValues()

  }

  updateShelfValues = () => {

    api.getAll().then(
      (books) => {

        let _currentlyReadingBooks = books.filter( (book) =>  book.shelf === 'currentlyReading' )
        let _wantToReadBooks = books.filter( (book) =>  book.shelf === 'wantToRead' )
        let _readBooks = books.filter( (book) =>  book.shelf === 'read' )

        this.setState({
          currentlyReadingBooks : _currentlyReadingBooks,
          wantToReadBooks : _wantToReadBooks,
          readBooks : _readBooks,
          loading : false
        })
      }
    )
  }

  render() {
    console.log('loading', this.state.loading)
    console.log('currently reading', this.state.currentlyReadingBooks)
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        { this.state.loading ?
            (<div>Loading...</div>) :
            (<div><Shelf books={ this.state.currentlyReadingBooks } title="Currently Reading" />
            <Shelf books={ this.state.wantToReadBooks } title="Want To Read" />
            <Shelf books={ this.state.readBooks } title="Read" /></div>)
          }
        <div className="open-search">
          <Link to={{
                  pathname:'/search'
                  }}
          >Add a book</Link>
        </div>
      </div>
    )
  }
}
export default MyReads
