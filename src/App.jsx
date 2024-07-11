import { useState,useEffect } from 'react'
import './App.css'
import Counter from './Counter'
import Timer from './Timer'

function App() {
  /* const [stitches, setStitches] = useState(0) */
  const [stitches, setStitches] = useState(Number(localStorage.getItem('localStitches')))
  const [rows, setRows] = useState(Number(localStorage.getItem('localRows')))
  const [time, setTime] = useState(Number(localStorage.getItem('localTime')))
  const [displayOptions, setDisplayOptions] = useState({
    stitches:true,
    rows:true,
    timer:true
  })
  
  const setLocalStorage = () => {
    localStorage.setItem('localStitches',stitches)
    localStorage.setItem('localRows',rows)
    localStorage.setItem('localTime',time)
  }

  useEffect(() => {
    if (!stitches) {
      setStitches(0)      
    }
    if (!rows) {
      setRows(0)
    }
    if(!time) {
      setTime(0)
    }
    setLocalStorage()
    
  },[stitches,rows,time])

  console.log(localStorage)

  return (
    <>
      <h1>Crochet Counter</h1>      
      
      <button className="option-btn" onClick={() => setDisplayOptions({...displayOptions, stitches:!displayOptions.stitches})}>stitches</button>
      <button className="option-btn" onClick={() => setDisplayOptions({...displayOptions, rows:!displayOptions.rows})}>rows</button>
      <button className="option-btn" onClick={() => setDisplayOptions({...displayOptions, timer:!displayOptions.timer})}>timer</button>

      {displayOptions.stitches && <Counter typeName='stitches' type={stitches} setType={setStitches}/>}
      {displayOptions.rows && <Counter typeName='rows' type={rows} setType={setRows}/>}
      {displayOptions.timer && <Timer time={time} setTime={setTime}/>}
    </>
  )
}

export default App
