import { useState } from 'react'
import './App.css'
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
      <Counter typeName='stitches' type={stitches} setType={setStitches}/>
      <Counter typeName='rows' type={rows} setType={setRows}/>
      <Timer/>
    </>
  )
}

export default App
