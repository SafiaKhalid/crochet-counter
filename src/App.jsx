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
      {/* <button className='option-btn'>stitches</button>
      <button className='option-btn'>rows</button>
      <button className='option-btn'>timer</button> */}
      <OptionButton typeName='stitches' />
      <OptionButton typeName='rows'/>
      <OptionButton typeName='timer'/>
      <Counter typeName='stitches' type={stitches} setType={setStitches}/>
      <Counter typeName='rows' type={rows} setType={setRows}/>
      <Timer/>
    </>
  )
}

export default App
