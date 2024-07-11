import React from "react";

const OptionButton = ({typeName}) => {
    const toggleDisplay = () => {
        console.log(typeName)
    }

    return <button className="option-btn" onClick={toggleDisplay}>{typeName}</button>    
}

export default OptionButton