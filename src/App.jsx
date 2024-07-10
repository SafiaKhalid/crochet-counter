import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  const [stitches, setStitches] = useState(0)
  const [rows, setRows] = useState(0)

  return (
    <>
      <h1>Crochet Counter</h1>
      <Counter typeName='stitches' type={stitches} setType={setStitches}/>
      <Counter typeName='rows' type={rows} setType={setRows}/>
    </>
  )
}

export default App
