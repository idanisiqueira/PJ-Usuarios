import styled from "styled-components";

export const ContainerItens = styled.div`
border-radius: 31px 31px 0px 0px;
padding: 50px 36px;
display: flex;
flex-direction: column;
height: 100vh;

${ props => props.isAll && `
    height: 100%;
    min-height: calc(100vh - 14px);
`}

`;