import React, { Component } from 'react'
import Shelf from './Shelf.js'
import '../App.css'
import { Link } from 'react-router-dom'
import * as api from '../BooksAPI.js'


//stopped here.  Need to refactor allBooks, parse in to data to send to UI

class MyReads extends Component {

  state = {

    currentlyReadingBooks : {'books' :[] },
    wantToReadBooks : {'books' :[] },
    readBooks : {'books' :[] },
    loading: true

  }

  componentDidMount() {

    this.updateShelfValues()

  }

  updateShelfValues = () => {

    api.getAll().then(
      (books) => {

        console.log('api results', books)
        let _currentlyReadingBooks = books.filter( (book) =>  book.shelf == 'currentlyReading' )
        let _wantToReadBooks = books.filter( (book) =>  book.shelf == 'wantToRead' )
        let _readBooks = books.filter( (book) =>  book.shelf == 'read' )
        console.log('_CR', _currentlyReadingBooks)
        console.log('_WR', _wantToReadBooks)
        console.log('_R', _readBooks)
        this.setState({
          currentlyReadingBooks : {'books' : _currentlyReadingBooks},
          wantToReadBooks : {'books' : _wantToReadBooks},
          readBooks : {'books' : _readBooks},
          loading : false
        })
      }
    )
  }

  render() {
    console.log('loading', this.state.loading)
    console.log('currently reading 51', this.state.currentlyReadingBooks)
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
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}
export default MyReads
