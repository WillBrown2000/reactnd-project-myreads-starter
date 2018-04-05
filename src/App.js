import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchForm from './components/SearchForm.js'
import { Route, BrowserRouter } from 'react-router-dom'
import MyReads from './components/MyReads.js'

class BooksApp extends React.Component {



  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route path='/search' component={SearchForm}  />
          <Route exact path='/' component={MyReads} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
