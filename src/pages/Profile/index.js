import React, { useContext } from 'react';
import { View, Text } from "react-native";

import { AuthContext } from '../../contexts/auth';
import { HeaderApp } from "../../components/HeaderApp";

import { Button } from '../../components/Button';

import { Container, AreaButton } from './styles';



export function Profile() {

    const { signOut } = useContext(AuthContext);

    return (
        <Container>
            <HeaderApp />
            <AreaButton>
                <Button
                    title="Sair"
                    onPress={() => signOut()}
                />
            </AreaButton>
        </Container>
    )
}