import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Modal, View } from 'react-native';

import football from '../../assets/football.png';
import Walking from '../../assets/walking.png';
import Sportman from '../../assets/sportman.png';

import { Container, Info, Button, Header, Content, Icone, Text } from './styles';

export function ModalApp({ visible, setMVisibel }) {

    function closeModal() {
        setMVisibel(false)
    }

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}

        >
            <Container>
                <Content>
                    <Header>
                    </Header>
                    <Info>
                    <Text> Selecione sua modalidade </Text>
                        <Button onPress={closeModal}>
                            <Icone source={football} />
                        </Button>
                        <Button onPress={closeModal}>
                            <Icone source={Walking} />
                        </Button>
                        <Button onPress={closeModal}>
                            <Icone source={Sportman} />
                        </Button>
                    </Info>
                </Content>
            </Container >
        </Modal>

    );
}