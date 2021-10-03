import React, { useState } from 'react'

export default function Form() {
    const [data, setData] = useState("");

    const [firstname, setFirstName] = useState("");

    const [lastname, setLastName] = useState("");

    const handleChange = (e) => {
        setData(e.target.value)
        console.log(data)
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        console.log(data)
    }


    const handleLastName = (e) => {
        setLastName(e.target.value)
        console.log(data)
    }



    return (
        <div>
            <form>
                <input value={data} onChange={handleChange} type="text" />
                <input value={firstname} onChange={handleFirstName} type="text" />
                <input value={lastname} onChange={handleLastName} type="text" />
                <button type="button">Submit</button>
            </form>

            <p>{data}</p>
            <p>{firstname}</p>
            <p>{lastname}</p>
        </div>
    )
}
