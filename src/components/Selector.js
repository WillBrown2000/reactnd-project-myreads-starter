import React, { Component } from 'react';
import '../App.css'
import * as api from '../BooksAPI.js'

class Selector extends Component {

  handleChange = (event) => {

    api.update(this.props.book, event.target.value).then( (results) => {

      if (this.props.updateSearchBooksSelector) {this.props.updateSearchBooksSelector()}
        else {this.props.updateState()}

    })

  }

  render () {

    const bookLocations = [
      {
        "shelfValue":"none",
        "text":"None"
      },
      {
        "shelfValue":"currentlyReading",
        "text":"Currently Reading"
      },
      {
        "shelfValue":"wantToRead",
        "text":"Want to Read"
      },
      {
        "shelfValue":"read",
        "text":"Read"
      },
    ]

    console.log('just re-rendered selector')

    return (
      <div className="book-shelf-changer">
        <select value={this.props.book.shelf} onChange={(event)=>{this.handleChange(event)}}>
          <option value="na" disabled>Move to...</option>
          {bookLocations.map(({shelfValue, text}, j) =>
            (
              <option key={j} value={shelfValue}>{text}</option>
            )
          )}
        </select>
      </div>
    )
  }
}
export default Selector
