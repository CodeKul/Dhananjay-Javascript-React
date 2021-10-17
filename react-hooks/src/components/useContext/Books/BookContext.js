import React, { createContext, useState } from 'react'


export const BookContext = createContext();


export default function BookProvider(props) {

    const [books, setBooks] = useState([
        {
            bookName: "BAC",
            price: 200
        },
        {
            bookName: "XYZ",
            price: 400
        },
        {
            bookName: "FGH",
            price: 900
        },
        {
            bookName: "ZXC",
            price: 500
        }
    ])


    return (
        <div>
          <BookContext.Provider value={[books, setBooks]}>
              {props.children}
              
              </BookContext.Provider>  
        </div>
    )
}
