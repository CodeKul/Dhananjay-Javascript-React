import React from 'react'

export default function Book({bookName, price, id}) {



    return (
        <div>
            <li key={id}>
               Book Name : {bookName}
               Book Price : {price}
            </li>
        </div>
    )
}
