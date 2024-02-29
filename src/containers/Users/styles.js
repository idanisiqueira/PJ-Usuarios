import styled from "styled-components";
import Background from "../../assets/bg2.png"

export const Container = styled.div`
background: url("${Background}");
background-size: cover;
background-attachment: fixed;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100%;
min-height: 100vh;

`;

export const Image = styled.img `
width: 200px;
margin: 15px auto;
`

export const ContainerItens = styled.div`
border-radius: 31px 31px 0px 0px;
padding: 50px 36px;
display: flex;
flex-direction: column;
height: 100%;
min-height: calc(100vh - 14px);
`;

export const Button = styled.button`
border-radius: 5px;
background: #AB6D6E;
width: 260px;
height: 50px;
color: #fff;
border: none;
margin-bottom: 50px;

cursor: pointer;

font-family: 'Karla', sans-serif;
font-size: 15px;
font-style: normal;
line-height: 28px;
margin-top: 10px;

&:hover {

opacity: 0.8;

}

&:active {

color: #000;
    
}
`;

export const User = styled.li `
color:#fff;
display: flex;
justify-content: space-around;
align-items: center;

border-radius: 5px;
background: rgba(255, 255, 255,0.5);
box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.25);
border: none;
outline: none;
width: 255px;
height: 40px;

font-family: 'Karla', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 15px;
margin-left: -30px;
`;

