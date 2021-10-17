import { useState } from "react"

export const Notes = () => {
    const [notes] = useState([
        {
            title: "First note", 
            description: "This is my first note",
            done: false
        }
    ]);

    return(
        <div>
            <h1>Notes</h1>

            {/* {notes.map(note=> {
                return (
                    <div>
                        <h1>{note.title}</h1>
                        <h3>{note.description}</h3>
                        <p>{note.done ? "done!" : "not done!"}</p>
                    </div>
                )
            })} */}

            {notes.map(({title, description, done})=> {
                return <Note title={title} description={description} done={done}/>
            })}
        </div>
    )
};


const Title = ({content})=> {
    return <h1>{content}</h1>
}


const Description = ({description})=> {
    return <h1>{description}</h1>
}


const Done = ({done})=> {
    return <h1>{done ? "done" : "not done"}</h1>
}

const Note = ({title, description, done}) => {
    return (
        <div>
            <Title content={title}/>

            <Description description={description}/>

            <Done done={done}/>
        </div>
    )
}

