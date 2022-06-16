import React, { useState} from 'react'

const Pixel = () => {
  const [style, setStyle] = useState({backgroundColor: '#800080', height: '20px', width: '20px'})
  
  return (
  <div style={style}></div>

)}


export default Pixel 