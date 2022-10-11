import React from 'react'
import Mid from '../assets/midgroundhero.svg';
import styled from 'styled-components';
const Middiv=styled.div`
// position:absolute;
// left:-0px;
// z-index:;
// top:-100px
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
will-change:transform
`
export default function Midground() {
  return (
    <Middiv>
    <div>
        <img src={Mid}/>
    </div>
    </Middiv>
  )
}
