import React from "react";

const Counter = ({typeName, type, setType}) => {    
    const decrease = () => {       
        if (type>0) {
            setType(type-1)
        }   
    }
    
    const increase = () => {
        setType(type+1)
    }
    
    const reset = () => {
        setType(0)
    }

    return <section className={'counter-container ' + typeName}>{typeName}: 
    <span>{type}</span>
        <button className={"btn counter-btn " + (type==0 && 'disabled-btn')} onClick={decrease}>-</button>
        <button className="btn counter-btn" onClick={increase}>+</button>
        <button className="btn function-btn" onClick={reset}>reset</button>
    </section>
}

export default Counter