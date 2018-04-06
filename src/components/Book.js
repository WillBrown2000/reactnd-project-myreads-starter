import React, { Component } from 'react'
import '../App.css'
import Selector from './Selector.js'

class Book extends Component {

  render() {

    const title = this.props.title || 'No Title Given'
    const shelf = this.props.shelf || 'none'
    const authors = this.props.authors || ['No Author Given']
    const imageLinks = this.props.imageLinks || ''
    const book = this.props
    const {updateState} = this.props

    return (
    <li>
      {console.log('title', { title })}
      {console.log('shelf', { shelf })}
      {console.log('authors',{ authors })}
      {console.log('from my reads updateMyReads from Book.js', updateState)}
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ imageLinks.thumbnail })` }}></div>
          <Selector shelf={shelf} book={book} updateState={updateState}/>
        </div>
          <div className="book-title">{ title }</div>
          <div className="book-authors">{ authors }</div>
      </div>
    </li>
      )
    }
}

export default Book
