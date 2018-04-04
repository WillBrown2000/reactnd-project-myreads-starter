import React, { Component } from 'react'
import '../App.css'
import Selector from './Selector.js'

class Books extends Component {

  render() {

    const { books } = this.props
    console.log('books', books)

    return (
        <div>
          <ol className="books-grid">
          {books.map(({authors, imageLinks, title, shelf}) => (
                <li>
                  {console.log('title', { title })}
                  {console.log('shelf', { shelf })}
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ imageLinks.thumbnail })` }}></div>
                      <Selector shelf={shelf}/>
                    </div>
                      <div className="book-title">{ title }</div>
                        { authors.map(({ author }) => (
                            <div className="book-authors">{author}</div>
                            )
                          )
                        }
                  </div>
                </li>
              )
            )}
          </ol>
        </div>
      )
  }
}

export default Books
