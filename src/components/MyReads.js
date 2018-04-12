import React, { Component } from 'react'
import Shelf from './Shelf.js'
import '../App.css'
import { Link } from 'react-router-dom'



//stopped here.  Need to refactor allBooks, parse in to data to send to UI

class MyReads extends Component {


  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
            <Shelf books={ this.props.userSelectedBooks.currentlyReadingBooks } title="Currently Reading" updateState={this.props.updateState} />
            <Shelf books={ this.props.userSelectedBooks.wantToReadBooks } title="Want To Read" updateState={this.props.updateState} />
            <Shelf books={ this.props.userSelectedBooks.readBooks } title="Read" updateState={this.props.updateState} />
        <div className="open-search">
          <Link onClick={()=> this.props.updateFromSearchPage()} to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}
export default MyReads
