import React, { useRef } from 'react'

export default function InputRef() {

    const InputRef = useRef()
    const styling = () => {
        InputRef.current.style.border = "solid 1px red"
        InputRef.current.value = "20"
    }
    return (
        <div>
            <input ref={InputRef} onFocus={styling} type="text" />
        </div>
    )
}
