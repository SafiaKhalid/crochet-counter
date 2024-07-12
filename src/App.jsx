import { useState, useEffect } from 'react'
import './App.css'
import Counter from './Counter'
import Timer from './Timer'

function App() {  
  const [stitches, setStitches] = useState(localStorage.getItem('localStitches') !== null ? Number(localStorage.getItem('localStitches')) : 0)
  const [rows, setRows] = useState(localStorage.getItem('localRows') !== null ? Number(localStorage.getItem('localRows')) : 0)
  const [time, setTime] = useState(localStorage.getItem('localTime') !== null ? Number(localStorage.getItem('localTime')) : 0)



  const [displayOptions, setDisplayOptions] = useState(localStorage.getItem('localDisplayOptions') !== null ? JSON.parse(localStorage.getItem('localDisplayOptions')) : {
    stitches:true,
    rows:true,
    timer:true
  })
  
  const setLocalStorage = () => {
    localStorage.setItem('localStitches',JSON.stringify(stitches))
    localStorage.setItem('localRows',JSON.stringify(rows))
    localStorage.setItem('localTime',JSON.stringify(time))
    localStorage.setItem('localDisplayOptions',JSON.stringify(displayOptions))
  }

  useEffect(() => {
    setLocalStorage()    
  },[stitches,rows,time,displayOptions])

  return (
    <main>
      <h1>Crochet Counter</h1>      
      
      <section className='btn-container'>
        <button className={"btn option-btn " + (displayOptions.stitches && 'displayed')} onClick={() => setDisplayOptions({...displayOptions, stitches:!displayOptions.stitches})}>stitches</button>
        <button className={"btn option-btn " + (displayOptions.rows && 'displayed')} onClick={() => setDisplayOptions({...displayOptions, rows:!displayOptions.rows})}>rows</button>
        <button className={"btn option-btn " + (displayOptions.timer && 'displayed')} onClick={() => setDisplayOptions({...displayOptions, timer:!displayOptions.timer})}>timer</button>
      </section>      

      {displayOptions.stitches && <Counter typeName='stitches' type={stitches} setType={setStitches}/>}
      {displayOptions.rows && <Counter typeName='rows' type={rows} setType={setRows}/>}
      {displayOptions.timer && <Timer time={time} setTime={setTime}/>}
    </main>
  )
}

export default App
