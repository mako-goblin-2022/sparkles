import React, { useState} from 'react'

const Pixel = () => {
  const [style, setStyle] = useState({backgroundColor: '#fff', height: '20px', width: '20px'})
  
  const clickHandler = () => {
    setStyle({
      ...style,
      backgroundColor: 'black'
    })
  }

  const eraseHandler = () => {
    setStyle({
     ...style, 
     backgroundColor: 'white'
    })
  }

  return (
  <div style={style} onClick={clickHandler} onDoubleClick={eraseHandler} ></div>

)}


export default Pixel 