import React, { useState } from "react";


const CounterFunction = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>the number by function : {count} </h1>
            <button onClick ={() => setCount(count + 1)}>add</button>
             <button onClick = {() => setCount(count - 1)}>minus</button>
        </div>
    )
}

export default CounterFunction;