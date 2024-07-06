import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState)
            console.log("Previous Props:", prevProps)
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye!" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }

    increament() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State:", prevState)
            console.log("Previous Props:", prevProps)
            return {
                count: prevState.count + 1
            }
        })
    }

    // increamentFive() {
    //     this.increament()
    //     this.increament()
    //     this.increament()
    //     this.increament()
    //     this.increament()
    // }

    render() {
        return (
            <div>
                <h1> {this.state.introduction} </h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increament()}>Increament</button>
                <p>You Have Clicked {this.state.count} Times</p>
                {/* <button onClick={() => this.increamentFive()}>Increament Five</button>
                <p>You Have Clicked {this.state.count} Times</p>
                 */}
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;