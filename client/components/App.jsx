import React, {useState} from 'react'
import Pixel from './Pixel'
import Header from './Header'
import Footer from './Footer'
import ColorSelector from './ColorSelector'

const App = () => {
  const [selectedColor, setColor] = useState("#f44336")
  const pixels = Array.from({length: 1200}, (pixel, i) => [<Pixel key={i} colour={selectedColor}/>])
  return( 
  <>
 <Header/>
  <div id='canvas'>
    {pixels}
  </div>
  <ColorSelector setTheColor={setColor} theSelectedColor={selectedColor}/>
  <Footer/>
  </>
  )}

export default App
