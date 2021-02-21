import React from "react";

const ColorfulMessage = (props) => {
  const contentStyle = {
  color: props.color,
  fontSize: '24px'
  }
  return <p style={contentStyle}>{props.message}</p>
}

export default ColorfulMessage;
