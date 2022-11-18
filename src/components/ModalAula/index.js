import React, { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Video } from 'expo-av';

import { useNavigation } from '@react-navigation/native';

import Close from '../../assets/closeIcon.png';

import {
    Container, CloseArea, CloseArea2, Info, AreaVideo, AreaInfoDesc, AreaInfoProf,
    AreaTextProf, AreaNotaProf, AreaDescAtv, Button, Header, Content, Icone, Text, TextOpacity
} from './styles';

export function ModalAula({ visibleAula, setMVisibelAula, Listvideo, Listdesc, ListIcon, ListQnt, ListNota, ListNome }) {
    const navigation = useNavigation();
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    function closeModal() {
        setMVisibelAula(false)
    }
    function ClickProf() {
        setMVisibelAula(false)
        navigation.navigate('Detalhes')
    }

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visibleAula}
        >
            <Container>
                <CloseArea onPress={closeModal}>
                </CloseArea>
                <Content>
                    <Header>
                        <Button onPress={closeModal}>
                            <Icone source={Close} />
                        </Button>
                    </Header>
                    <Info>
                        <AreaInfoDesc>
                            <AreaInfoProf onPress={ClickProf}>
                                <Ionicons
                                    name={ListIcon}
                                    size={70}
                                />
                                <AreaTextProf>
                                    <Text>{ListNome}</Text>
                                    <TextOpacity>Quantidade de aulas</TextOpacity>
                                    <TextOpacity>{ListQnt}</TextOpacity>
                                </AreaTextProf>
                                <AreaNotaProf>
                                    <TextOpacity>Nota do professor</TextOpacity>
                                    <TextOpacity>{ListNota}</TextOpacity>
                                </AreaNotaProf>
                            </AreaInfoProf>
                            <AreaDescAtv>
                                <Text>{Listdesc}</Text>
                            </AreaDescAtv>
                        </AreaInfoDesc>
                        <AreaVideo>
                            <Video
                                ref={video}
                                style={styles.video}
                                source={Listvideo}
                                useNativeControls
                                shouldPlay
                                resizeMode="contain"
                                onPlaybackStatusUpdate={status => setStatus(() => status)}
                            />
                        </AreaVideo>
                    </Info>
                </Content>
                <CloseArea2 onPress={closeModal}>
                </CloseArea2>
            </Container >
        </Modal>
    );

}
const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    }
});


