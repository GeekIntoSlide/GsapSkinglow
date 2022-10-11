import logo from './assets/logo.svg';
import Background from './Components/Background';
import './App.css';
import styled from 'styled-components';

import Index from './Components/Index';
const Herodiv=styled.div`
position:relative;

`

const HeroSection=styled.section`
display:flex;
position:relative;
height:100vh;
width:100vw;
justify-content:space-between;
align-items:center;
flex-direction:column;

img{
  width: 50vw;
  pointer-event:visible;
  
}
`
const TitleSection =styled.h1`
font-size:2rem;
text-transform:uppercase;
position:relative;
top:-80px

`
function App() {
  return (
    <HeroSection>
     <img src={logo} alt="img"/>
     
     <TitleSection>Glow your Skin </TitleSection>
     <Herodiv><Index/></Herodiv>
     
     
    </HeroSection>
  );
}

export default App;
