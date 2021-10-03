import React from 'react'

class ClassOne extends React.Component {

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("After Mount")
    }

    shouldComponentUpdate() {
        console.log("Should update")
        return true;
    }

    componentWillUpdate(){
        console.log("Component Will Update")
    }


    incrementCounter = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        console.log("Inside Render")
        return (
            <div>
                Class One Component

                <h1>Counter</h1>

                <h4>{this.state.count}</h4>

                <button onClick={this.incrementCounter}>Increment</button>

                <button>Decrement</button>
            </div>
        )
    }
}

export default ClassOne;
