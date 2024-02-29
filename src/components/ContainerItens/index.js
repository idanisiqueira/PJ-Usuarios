import React from 'react';
import { ContainerItens as Container } from './styles';

function ContainerItens({children, isAll}){

    return <Container isAll={isAll}>{children}</Container>

}

export default ContainerItens
