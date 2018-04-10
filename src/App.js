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

    const searchBooks = this.state.searchBooks.map( book => book)
    const userBooks = this.state.userBooks.map( book => book)

    console.log(searchBooks)

    console.log('userBooks from state: ', userBooks)

    api.getAll().then( (userBooks) => {

      console.log('userBooks from getAll :', userBooks)


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

      console.log('about to run set State: ', newBookList)
      this.setState({

        searchBooks: newBookList

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

          console.log('about to run set State: ', newBookList)
          this.setState({

            searchBooks: newBookList

          })

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
      }
    )
  }

  render() {

    console.log('state.searchBooks: ', this.state.searchBooks)
    return (
      <BrowserRouter>
        <div className="app">
          <Route path='/search' render={()=> <SearchForm query={this.state.query} searchBooks={this.state.searchBooks} updateSearchBooksSelector={this.updateSearchBooksSelector} searchHandleChange={this.searchHandleChange} updateState={this.updateShelfValues}/>}/>
          <Route exact path='/' render={()=> <MyReads userSelectedBooks={this.state} updateState={this.updateShelfValues}/>} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
