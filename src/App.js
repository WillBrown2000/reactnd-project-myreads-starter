import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './components/Shelves.js'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }


  render() {

    const wantToReadBooks = {
                  "books":
                    [{
                        "title": "The Linux Command Line",
                        "subtitle": "A Complete Introduction",
                        "authors": [
                            "William E. Shotts, Jr."
                        ],
                        "publisher": "No Starch Press",
                        "publishedDate": "2012",
                        "description": "Youve" ,
                        "industryIdentifiers": [
                            {
                                "type": "ISBN_13",
                                "identifier": "9781593273897"
                            },
                            {
                                "type": "ISBN_10",
                                "identifier": "1593273894"
                            }
                        ],
                        "readingModes": {
                            "text": true,
                            "image": false
                        },
                        "pageCount": 480,
                        "printType": "BOOK",
                        "categories": [
                            "COMPUTERS"
                        ],
                        "averageRating": 4,
                        "ratingsCount": 2,
                        "maturityRating": "NOT_MATURE",
                        "allowAnonLogging": true,
                        "contentVersion": "1.2.2.0.preview.2",
                        "panelizationSummary": {
                            "containsEpubBubbles": false,
                            "containsImageBubbles": false
                        },
                        "imageLinks": {
                            "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                            "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                        },
                        "language": "en",
                        "previewLink": "http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
                        "infoLink": "https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
                        "canonicalVolumeLink": "https://market.android.com/details?id=book-nggnmAEACAAJ",
                        "id": "nggnmAEACAAJ",
                        "shelf": "currentlyReading"

                      },
                    {
                        "title": "Learning Web Development with React and Bootstrap",
                        "authors": [
                            "Harmeet Singh",
                            "Mehul Bhatt"
                        ],
                        "publishedDate": "2016-12-30",
                        "description": "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
                        "industryIdentifiers": [
                            {
                                "type": "ISBN_10",
                                "identifier": "1786462494"
                            },
                            {
                                "type": "ISBN_13",
                                "identifier": "9781786462497"
                            }
                        ],
                        "readingModes": {
                            "text": false,
                            "image": false
                        },
                        "pageCount": 278,
                        "printType": "BOOK",
                        "maturityRating": "NOT_MATURE",
                        "allowAnonLogging": false,
                        "contentVersion": "preview-1.0.0",
                        "panelizationSummary": {
                            "containsEpubBubbles": false,
                            "containsImageBubbles": false
                        },
                        "imageLinks": {
                            "smallThumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                            "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                        },
                        "language": "en",
                        "previewLink": "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
                        "infoLink": "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
                        "canonicalVolumeLink": "https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
                        "id": "sJf1vQAACAAJ",
                        "shelf": "currentlyReading"
                    }
]
                }
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf books={ wantToReadBooks } />
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
