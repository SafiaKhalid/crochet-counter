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

    return <section className="timer">
        <p>{Math.floor(time /3600)} h</p>    
        <p>{Math.floor((time%3600)/60)} m</p>    
        <p>{Math.floor(time %60)} s</p>
        <button className="function-btn" onClick={() => setTimerStart(!timerStart)}>{timerStart? 'pause':'start'}</button>        
        <button className="function-btn" onClick={resetTimer}>reset</button>
    </section>
}

export default Timer