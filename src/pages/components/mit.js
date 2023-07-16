import React from 'react';
import { imageStyles } from './style'

function License(props) {
  const src = props.src;
  return <img src={src} width={props.width} height={props.height} style={imageStyles} alt={props.alt} />;
}

export default License;
