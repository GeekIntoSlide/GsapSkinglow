import React from 'react'
import Back from '../assets/backgroundhero.svg';
import styled from 'styled-components';
const Backdiv=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
will-change:transform
`
const Imgsize=styled.img`
width:25vw;
`
export default function Background() {
  return (
  <Backdiv>
    <div>
        <img src={Back} />
       
    </div>
    </Backdiv>
  )
}
