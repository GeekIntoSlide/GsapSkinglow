import React from 'react'
import Foreground from './Foreground';
import Midground from './Midground';
import Background from './Background';
import styled from 'styled-components';
const Indexdiv=styled.div`
position:relative;
// top:-250px;
// left:-125px
height:30vh;
width:50vw;
top:-180px
`
export default function Index() {
  return (
    <Indexdiv>
    <Background/>
     <Foreground/>
     <Midground/>
    </Indexdiv>
  )
}
