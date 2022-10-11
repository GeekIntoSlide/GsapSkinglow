import React from 'react'
import Fore from '../assets/foregroundhero.svg';
import styled from 'styled-components';
const Forediv=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
will-change:transform
`
export default function Foreground() {
  return (
    <Forediv>
    <div>
        <img src={Fore}/>
    </div>
    </Forediv>
  )
}
