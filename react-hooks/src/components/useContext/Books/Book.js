import React from 'react'

export default function Book(props) {
    return (
        <div>
            <li>
                {props.bookName}
                {props.price}
            </li>
        </div>
    )
}
