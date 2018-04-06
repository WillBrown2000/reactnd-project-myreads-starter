import React, { Component } from 'react';
import '../App.css'
import * as api from '../BooksAPI.js'

class Selector extends Component {

  handleChange = (event) => {

    api.update(this.props.book, event.target.value).then( (results) => {

      if(this.props.updateState) this.props.updateState()

    })

  }

  render () {

    const bookLocations = [
      {
        "value":"none",
        "text":"None"
      },
      {
        "value":"currentlyReading",
        "text":"Currently Reading"
      },
      {
        "value":"wantToRead",
        "text":"Want to Read"
      },
      {
        "value":"read",
        "text":"Read"
      },
    ]

    const book = this.props.book
    const currentValue = this.props.shelf || 'none'

    return (
      <div className="book-shelf-changer">
        <select defaultValue={currentValue} onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
          {bookLocations.map(({value, text}, j) =>
            (
              <option key={j} value={value}>{text}</option>
            )
          )}
        </select>
      </div>
    )
  }
}
export default Selector
