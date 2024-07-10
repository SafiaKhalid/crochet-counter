import React, {useState} from "react";

const Counter = () => {
    const [value, setValue] = useState(0)

    const decrease = () => {
        console.log('decrease')
    }
    
    const increase = () => {
        console.log('increase')
    }
    
    const reset = () => {
        console.log('reset')
    }

    return <section>counter: {value}
        <button className="counter-btn" onClick={decrease}>-</button>
        <button className="counter-btn" onClick={increase}>+</button>
        <button className="reset-btn" onClick={reset}>reset</button>
    </section>
}

export default Counter