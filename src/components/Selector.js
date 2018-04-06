import React, { Component } from 'react';
import '../App.css'
import * as api from '../BooksAPI.js'

class Selector extends Component {

  handleChange = (event) => {

    api.update(this.props.book, event.target.value).then( (results) => {

      // there's not a need to update the SearchForm state, hence this conditionally checks to see if
      // the updateState() method is present from MyReads.js, which does need to re-render

      if (this.props.updateState) this.props.updateState()

      this.forceUpdate()

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

    const currentValue = this.props.shelf || 'none'

    return (
      <div className="book-shelf-changer">
        <select value={currentValue} onChange={this.handleChange}>
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
