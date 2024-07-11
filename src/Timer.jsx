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
        setTimerStart(false)
        setTime(0)
    }

    return <section className="timer">timer: {time}
    {/* <p>days: {Math.floor(time / (1000 * 60 * 60 * 24))}</p>
    <p>hours: {Math.floor((time % (1000 * 60 * 60 *24)) / (1000 * 60 * 60))}</p>
    <p>minutes: {Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))}</p>
    <p>seconds: {Math.floor((time % (1000 * 60)) / 1000)}</p> */}
        <button className="function-btn" onClick={() => setTimerStart(!timerStart)}>{timerStart? 'pause':'start'}</button>        
        <button className="function-btn" onClick={resetTimer}>reset</button>
    </section>
}

export default Timer