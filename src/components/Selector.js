import React, { Component } from 'react';
import '../App.css'

class Selector extends Component {

  render () {

    const bookLocations = [
      {
        "value":"none",
        "text":"None"
      },
      {
        "value":"CurrentlyReading",
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

    const currentValue = this.props.shelf || 'none'
    console.log('currentValue', currentValue)

    return (
      <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>Move to...</option>
          {bookLocations.map(({value, text}, j) =>
            (
              <option key={j} value={value} selected={ value === currentValue }>{text}</option>
            )
          )}
        </select>
      </div>
    )
  }
}
export default Selector
