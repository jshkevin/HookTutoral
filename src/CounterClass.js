import React, { useState } from "react";

class CounterClass extends React.Component {
    state  = {
        count : 0
    }
    add = () => {
        this.setState( current => ({ count : current.count + 1}));
    }
    minus = () => {
        this.setState( current =>  ({ count : current.count - 1}));
    }

    render() {
        return (
            <div>
                <h1>the number by class : {this.state.count} </h1>
                <button onClick = {this.add}>add</button>
                <button onClick = {this.minus}>minus</button>
            </div>
        )
    }
}


export default CounterClass;


