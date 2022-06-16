import React from 'react'
import Pixel from './Pixel'

const App = () => {
  const pixels = Array.from({length: 1200}, () => [<Pixel /> ])
  return <div id='canvas'>
    {pixels}
  </div>
}

export default App
