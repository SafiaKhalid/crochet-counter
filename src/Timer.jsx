import React, {useState, useEffect, useRef} from "react";


const Timer = () => {
    const [time, setTime] = useState(0)
    const [timerStart, setTimerStart] = useState(false)
    let timerInterval

    const startTimer = () => {
        timerInterval = setInterval(() => {
            setTime(time+1)
        },1000)
    }

    useEffect(() => {
        if (timerStart) {
            startTimer()
            return () => clearInterval(timerInterval)
        }    
    }, [timerStart, time])
    
    const resetTimer = () => {
        console.log('reset');
    }

    return <section className="timer">timer: {time}
        <button className="function-btn" onClick={() => setTimerStart(!timerStart)}>{timerStart? 'pause':'start'}</button>
        {/* <button className="function-btn" onClick={pauseTimer}>pause</button> */}
        <button className="function-btn" onClick={resetTimer}>reset</button>
    </section>
}

export default Timer