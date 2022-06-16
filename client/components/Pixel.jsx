import React, { useState} from 'react'

const Pixel = () => {
  const [style, setStyle] = useState({backgroundColor: '#fff', height: '20px', width: '20px'})
  
  const drawHandler = () => {
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
  <div style={style} draggable={true} onClick={drawHandler} onDoubleClick={eraseHandler} onDragEnter={drawHandler}></div>
)}


export default Pixel 