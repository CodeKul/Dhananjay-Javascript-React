import React from 'react'
import DisplayCourses from './DisplayCourses';

export default function Courses() {

    let skillsList = ["HTML", "CSS", "Javascript", "ReactJS", "JAVA"];
    let courses = ["Data Science", "Python", "AI", "Web Development"]

    let candidatesList = [
        {
            fname: "Dhananjay",
            city: "Pune",
            designation: "SWE"
        },

        {
            fname: "Swapnil",
            city: "Mumbai",
            designation: "SDE"
        },

        {
            fname: "Sanket",
            city: "Banglore",
            designation: "BA"
        }
    ]
    return (
        <div>
            <h1>List your skills:</h1>

            <ul>
                {skillsList.map((item)=> {
                    <li>{item}</li>
                })}
            </ul>


            <DisplayCourses courses={candidatesList}/>
        </div>
    )
}
