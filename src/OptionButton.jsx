import React from "react";

const OptionButton = ({typeName, type, setType}) => {
    const toggleDisplay = () => {                
        setType({...type, [typeName]:![`type.${typeName}`]})                
    }

    return <button className="option-btn" onClick={toggleDisplay}>{typeName}</button>    
}

export default OptionButton