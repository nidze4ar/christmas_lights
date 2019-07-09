import React, {Fragment} from 'react'

const Lights = ({col1, col2, col3, col4, col5, size}) => {
 let colors = [col1, col2, col3, col4, col5];
     return (
  <Fragment>    
    <li style={{ background: colors[Math.round(Math.random() * 4)], width: `${size}px`, height: `${size}px` }}></li>
    <li style={{ background: colors[Math.round(Math.random() * 4)], width: `${size}px`, height: `${size}px` }}></li>
    <li style={{ background: colors[Math.round(Math.random() * 4)], width: `${size}px`, height: `${size}px` }}></li>
    <li style={{ background: colors[Math.round(Math.random() * 4)], width: `${size}px`, height: `${size}px` }}></li>
    <li style={{ background: colors[Math.round(Math.random() * 4)], width: `${size}px`, height: `${size}px` }}></li>
  </Fragment>
            )
      }
  
            
export default Lights        