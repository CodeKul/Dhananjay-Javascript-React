import React, { useContext, useState } from 'react'
import { BookContext } from './BookContext'

export default function AddNewBook() {

    const [books, setBooks] = useContext(BookContext)

    const [bookName, setBookName] = useState("")
    const [price, setPrice] = useState("")

    const addBook = () => {
setBooks((prev) => [...prev, {bookName: bookName, price:price}])
    }
    return (
        <div>
            <input placeholder='Book Name' value={bookName} onChange={(e)=> {setBookName(e.target.value)}} type="text" />
        
            <input placeholder='Book Price' value={price} onChange={(e)=> {setPrice(e.target.value)}} type="text" />
        

        <button onClick={addBook}>Add Book</button>
        
        
        </div>
    )
}
