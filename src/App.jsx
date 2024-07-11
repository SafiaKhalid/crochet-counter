import { useState } from 'react'
import './App.css'
import OptionButton from './OptionButton'
import Counter from './Counter'
import Timer from './Timer'

function App() {
  const [stitches, setStitches] = useState(0)
  const [rows, setRows] = useState(0)
  const [displayOptions, setDisplayOptions] = useState({
    stitches:true,
    rows:true,
    timer:true
  })
  

  return (
    <>
      <h1>Crochet Counter</h1>      
      
      <button className="option-btn" onClick={() => setDisplayOptions({...displayOptions, stitches:!displayOptions.stitches})}>stitches</button>
      <button className="option-btn" onClick={() => setDisplayOptions({...displayOptions, rows:!displayOptions.rows})}>rows</button>
      <button className="option-btn" onClick={() => setDisplayOptions({...displayOptions, timer:!displayOptions.timer})}>timer</button>

      {displayOptions.stitches && <Counter typeName='stitches' type={stitches} setType={setStitches}/>}
      {displayOptions.rows && <Counter typeName='rows' type={rows} setType={setRows}/>}
      {displayOptions.timer && <Timer/>}
    </>
  )
}

export default App
