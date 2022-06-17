import React, {useState} from 'react';
import { TwitterPicker } from 'react-color';

const ColorSelector = (props) => {
  console.log(props)
  //const [selectedColor, setColor] = useState("#f44336");

  function changeColor(color) {
  props.setTheColor(color.hex)
  //setColor(color.hex);
}
  return <TwitterPicker color={props.theSelectedColor} onChangeComplete={changeColor} />
  
}

export default ColorSelector