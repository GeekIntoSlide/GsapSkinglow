import React from 'react'
import styled from 'styled-components'
export default function Content() {
    const Contenth1=styled.h1`
    font-size:56px;
    font-weight:900;
    color:#4d4d4d;
    
    padding-left:100px;
    `
    const Contenth2=styled.h2`
    font-size:56px;
    color:black;
    padding:0 100px;
    font-weight:900;
    `
  return (
    <div>
        <Contenth1><h1>Take Care</h1></Contenth1>
        <Contenth2><h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati, consequatur cupiditate deserunt alias excepturi totam illum veniam voluptatum enim esse, ex rerum minus, sapiente nemo aut. Temporibus, tempora vitae!</h2>
        </Contenth2>
        <Contenth1><h1>Take Care Two</h1></Contenth1>
        <Contenth2><h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati, consequatur cupiditate deserunt alias excepturi totam illum veniam voluptatum enim esse, ex rerum minus, sapiente nemo aut. Temporibus, tempora vitae!</h2>
        </Contenth2>
    </div>
  )
}
