import React from 'react';
import { imageStyles } from './style'

function Image(props) {
  const src = props.src;
  return <img src={src} height="750px" style={imageStyles} />;
}

export default Image;
