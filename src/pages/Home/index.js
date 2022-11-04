import React, { useEffect ,useContext } from 'react';

import { HeaderApp } from "../../components/HeaderApp";
import { InputApp } from '../../components/InputApp';
import { Container, ContSearch, Content } from './styles';

import CapaExercicio from '../../assets/capaExercicio2.png';
import { Card } from '../../components/Card';
import { AuthContext } from '../../contexts/auth';

export function Home() {

    const { OpenModal } = useContext(AuthContext);

    useEffect(()=> {
        OpenModal();
    },[])

    function ClickAula() {
        
    }

    return (
        <Container>
            <HeaderApp/>
            <ContSearch source={CapaExercicio}>
                <InputApp
                    name="Seash"
                    icon="search"
                    placeholder="Pesquisar ..."
                />
            </ContSearch>
            <Content>
                <Card
                onPress={ClickAula}
                />
            </Content>
        </Container>

    )
}
