import React from 'react'
// import * as sAPI from './BooksAPI'
import './App.css'
import SearchForm from './components/SearchForm.js'
import { Route, BrowserRouter } from 'react-router-dom'
import MyReads from './components/MyReads.js'
import * as api from './BooksAPI.js'

class BooksApp extends React.Component {

  state = {

    searchBooks: [],
    userBooks: [],
    currentlyReadingBooks : [] ,
    wantToReadBooks : [] ,
    readBooks : [] ,
    loading: true,
    query: ''

  }

  componentDidMount() {
    this.updateShelfValues()
  }

  updateSearchBooksSelector = () => {

    let newBookList = []
    let newUserBooks = []

    const searchBooks = this.state.searchBooks.map( book => book)

    console.log('current search books', searchBooks)

    api.getAll().then( (userBooks) => {

      console.log('current user books', userBooks)
      newUserBooks = Object.assign({},userBooks)

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

      console.log('this.userBooks', this.state.userBooks)

      this.setState({
        searchBooks: newBookList,
        userBooks: newUserBooks
      })

    })

  }

  searchHandleChange = (event) => {
      let _query = event.target.value

      this.setState({
        query: _query || ''
      })

      api.search(_query).then( (searchBooks) => {

        let newBookList = []

        if (_query === '') {
          console.log('set books to []')
          this.setState({
          searchBooks: []
          })

          return false
        }

        if (searchBooks.error) {
          this.setState({
            searchBooks: newBookList
          })

          return false

        }

        api.getAll().then( (userBooks) => {

          let _currentlyReadingBooks = userBooks.filter( (book) =>  book.shelf === 'currentlyReading' )
          let _wantToReadBooks = userBooks.filter( (book) =>  book.shelf === 'wantToRead' )
          let _readBooks = userBooks.filter( (book) =>  book.shelf === 'read' )

          this.setState({

            currentlyReadingBooks : _currentlyReadingBooks,
            wantToReadBooks : _wantToReadBooks,
            readBooks : _readBooks,
            loading : false,
            userBooks: userBooks

          })

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

            searchBooks: newBookList

          })

          console.log('updated selector stuff')
          console.log('current state', this.state)

        })

      })

  }

  updateShelfValues = (apiResults) => {

    api.getAll().then(
      (books) => {

        let _currentlyReadingBooks = books.filter( (book) =>  book.shelf === 'currentlyReading' )
        let _wantToReadBooks = books.filter( (book) =>  book.shelf === 'wantToRead' )
        let _readBooks = books.filter( (book) =>  book.shelf === 'read' )

        this.setState({

          currentlyReadingBooks : _currentlyReadingBooks,
          wantToReadBooks : _wantToReadBooks,
          readBooks : _readBooks,
          loading : false,
          userBooks: books

        })

        console.log('updated all shelf values')
        console.log('current state', this.state)

      }
    )
  }

  render() {

    return (
      <BrowserRouter>
        <div className="app">
          <Route path='/search' render={()=> <SearchForm query={this.state.query} searchBooks={this.state.searchBooks} updateSearchBooksSelector={this.updateSearchBooksSelector} searchHandleChange={this.searchHandleChange} updateState={this.updateShelfValues} refreshPage={this.refreshPage}/>}/>
          <Route exact path='/' render={()=> <MyReads userSelectedBooks={this.state} updateState={this.updateShelfValues}/>} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
