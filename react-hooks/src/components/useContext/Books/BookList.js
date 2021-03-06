import React, { useContext } from 'react'
import Book from './Book'
import { BookContext } from './BookContext'

export default function BookList() {

    const [books, setBooks] = useContext(BookContext)
    console.log(books)
    return (
        <div>
            {books && books.map((book, id) => {
                return(
                <Book bookName={book.bookName} price={book.price}/>
                )
            })}
        </div>
    )
}
