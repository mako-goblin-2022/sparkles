import React, {useState} from 'react';
import { TwitterPicker } from 'react-color';

const ColorSelector = () => {
  const [selectedColor, setColor] = useState("#f44336");

  function changeColor(color) {
  setColor(color.hex);
}
  return <TwitterPicker color={selectedColor} onChangeComplete={changeColor} />
  
}

export default ColorSelector