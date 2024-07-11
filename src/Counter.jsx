import React from "react";

const Counter = ({typeName, type, setType}) => {    
    const decrease = () => {       
        setType(type-1)
    }
    
    const increase = () => {
        setType(type+1)
    }
    
    const reset = () => {
        setType(0)
    }

    return <section className={typeName}>{typeName}: {type}
        <button className="counter-btn" onClick={decrease}>-</button>
        <button className="counter-btn" onClick={increase}>+</button>
        <button className="function-btn" onClick={reset}>reset</button>
    </section>
}

export default Counter