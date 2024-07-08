import React from 'react'
import Book from './Book'

function RenderingLists() {
    const bookLists = [
        'book1',
        'book2',
        'book3',
    ]

    const books = [
        {
            title: "book1title",
            author: "book1author",
            pages: "444",
        },
        {
            title: "book2title",
            author: "book2author",
            pages: "555",
        },
        {
            title: "book3title",
            author: "book3author",
            pages: "6666",
        }
    ]

  return (
    <div>
        {bookLists.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr/>
        {
        books.map(book => {
            return (
            <Book key={book.title} book={book}/>
            )
        })
        }
    </div>
  )
}

export default RenderingLists