import React, { Component } from 'react';
import '../App.css'
import * as api from '../BooksAPI.js'

class Selector extends Component {

  handleChange = (event) => {

    api.update(this.props.book, event.target.value).then( (results) => {

      // there's not a need to update the SearchForm state, hence this conditionally checks to see if
      // the updateState() method is present from MyReads.js, which does need to re-render
      this.props.updateState()

      console.log('results from api: ', results)

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

    console.log('current shelf state of ' + this.props.book.title + ' is: ', this.props.book.shelf)

    return (
      <div className="book-shelf-changer">
        <select value={this.props.book.shelf} onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
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
