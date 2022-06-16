import React from 'react'
import Pixel from './Pixel'
import Header from './Header'
import Footer from './Footer'
import ColorSelector from './ColorSelector'

const App = () => {
  const pixels = Array.from({length: 1200}, () => [<Pixel /> ])
  return( 
  <>
 <Header/>
  <div id='canvas'>
    {pixels}
  </div>
  <ColorSelector/>
  <Footer/>
  </>
  )}

export default App
