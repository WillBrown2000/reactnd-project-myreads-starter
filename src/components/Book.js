import React, { Component } from 'react'
import '../App.css'
import Selector from './Selector.js'

class Book extends Component {

  render() {

    const title = this.props.book.title || 'No Title Given'
    const shelf = this.props.book.shelf || 'none'
    const authors = this.props.book.authors || ['No Author Given']
    const imageLinks = this.props.book.imageLinks || ''
    const { book } = this.props
    const { updateState, updateSearchBooksSelector, query } = this.props

    return (
    <li>
      {console.log('shelf passed to selector for ' + title + ': ', shelf)}
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ imageLinks.thumbnail })` }}></div>
          <Selector shelf={shelf} book={book} query={query} updateSearchBooksSelector={updateSearchBooksSelector} updateState={updateState}/>
        </div>
          <div className="book-title">{ title }</div>
          <div className="book-authors">{ authors }</div>
      </div>
    </li>
      )
    }
}

export default Book
