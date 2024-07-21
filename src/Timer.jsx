import {useState, useEffect} from "react";


const Timer = ({time, setTime}) => {    
    const [timerStart, setTimerStart] = useState(false)   
    const [startTime, setStartTime] = useState(null)
    const [pausedTime, setPausedTime] = useState(0)
    const [timeComponents, setTimeComponents] = useState({
        secs: 0,
        mins: 0,
        hrs: 0
    })
    let timerInterval

    const startTimer = async () => {
        setStartTime(new Date().getTime() - pausedTime)
        
        timerInterval = setInterval(updateTimer,1000)
    }

    const pauseTimer = () => {
        clearInterval(timerInterval)
        setPausedTime(new Date().getTime() - startTime)        
        timerInterval = null
    }

    const resetTimer = () => {    
        clearInterval(timerInterval)
        setTimerStart(false)
        setTime(null)
        setPausedTime(0)
        setTimeComponents({
            secs: 0,
            mins: 0,
            hrs: 0
        })
    }

    const updateTimer = () => {
        let currentTime = new Date().getTime()
        
        let calculatedTime = currentTime - startTime
        
        setTimeComponents({
            secs: Math.floor(calculatedTime / 1000) %  60,
            mins: Math.floor(calculatedTime / 1000 / 60) %  60,
            hrs: Math.floor(calculatedTime / 1000 / 60 / 60) %  60
        })    
    }

    const timeCheck = () => {
        setTimerStart(!timerStart)

        if (timerStart) {
            pauseTimer()
        }
    }

    useEffect(() => {
        if (timerStart) {
            startTimer()   
        } 
       
        return () => {
            clearInterval(timerInterval)
        }
    }, [timerStart, time, startTime])    

    return <section className="timer">
        <div className="time">
            <p className="hours">{timeComponents.hrs>9 ? (timeComponents.hrs>99 ? timeComponents.hrs : `0${timeComponents.hrs}`) : `00${timeComponents.hrs}`} h</p>    
            <p className="minutes">{timeComponents.mins>9 ? timeComponents.mins : `0${timeComponents.mins}`} m</p>    
            <p className="seconds">{timeComponents.secs>9 ? timeComponents.secs : `0${timeComponents.secs}`} s</p>                
        </div>
        <button className="btn function-btn" onClick={timeCheck}>{timerStart? 'pause':'start'}</button>        
        <button className=" btn function-btn" onClick={resetTimer}>reset</button>        
    </section>
}

export default Timer