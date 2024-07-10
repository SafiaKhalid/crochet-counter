import React, {useState} from "react";

const Timer = () => {
    const [time, setTime] = useState(0)

    const startTimer = () => {
        console.log('start');
    }
    
    const pauseTimer = () => {
        console.log('pause');
    }
    const resetTimer = () => {
        console.log('reset');
    }

    return <section className="timer">timer: {time}
        <button className="function-btn" onClick={startTimer}>start</button>
        <button className="function-btn" onClick={pauseTimer}>pause</button>
        <button className="function-btn" onClick={resetTimer}>reset</button>
    </section>
}

export default Timer