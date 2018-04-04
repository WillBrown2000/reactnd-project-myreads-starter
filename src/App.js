import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './components/Search.js'
import { Route, BrowserRouter } from 'react-router-dom'
import MyReads from './components/MyReads.js'

class BooksApp extends React.Component {

  render() {


    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path='/search' component={Search} />
          <Route exact path='/' component={MyReads} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
