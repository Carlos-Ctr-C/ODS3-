import React from 'react';
import { Container, Headers, Text, Title, Logo, Content } from './styles';

import LogoPlus from '../../assets/SaudePlus.png';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Header() {
    return (
        <SafeAreaView>
            <Container>
                <Logo source={LogoPlus} />
            </Container>
            <Content>
                <Title> Cadastre - se </Title>
                <Text> Crie sua conta</Text>
            </Content>

        </SafeAreaView>
    )
}