import React from 'react';
import { Container, Headers, Text, Title, Logo, Content } from './styles';

import LogoPlus from '../../assets/SaudePlus.png';
import { SafeAreaView } from 'react-native-safe-area-context';

export function HeaderIn() {
    return (
        <SafeAreaView>
            <Container>
                <Logo source={LogoPlus} />
            </Container>
            <Content>
                <Title> Login </Title>
                <Text> Entre com sua conta</Text>
            </Content>

        </SafeAreaView>
    )
}