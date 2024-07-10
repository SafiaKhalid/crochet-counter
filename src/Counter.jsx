import React, {useState} from "react";

const Counter = () => {
    const [value, setValue] = useState(0)

    const decrease = () => {       
        setValue(value-1)
    }
    
    const increase = () => {
        setValue(value+1)
    }
    
    const reset = () => {
        setValue(0)
    }

    return <section>counter: {value}
        <button className="counter-btn" onClick={decrease}>-</button>
        <button className="counter-btn" onClick={increase}>+</button>
        <button className="reset-btn" onClick={reset}>reset</button>
    </section>
}

export default Counter