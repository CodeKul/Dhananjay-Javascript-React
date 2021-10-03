import React, { useEffect, useState } from "react";

export default function FuncComp() {
const [count, setCount] = useState(0)

// useState 
// useEffect 
// UseRef 
// UseCallback 
// UseMemo


// component will Mount, component did mount and render == useEffect

// https://blog.logrocket.com/modern-guide-react-state-patterns/
// https://blog.logrocket.com/the-beginners-guide-to-mastering-react-props-3f6f01fd7099/

useEffect(() => {console.log("Render")

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((result) => {
    console.log(result)

})

}

)



const incrementCounter = () => {
    setCount(count+1)
    console.log("count" + count)
}

const decrementCounter = () => {
    setCount(count-1)
    console.log("count" + count)
}

  return (
    <div>
      <h1>Counter</h1>

      <h4>{count}</h4>

      <button onClick={incrementCounter}>Increment</button>

      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}
