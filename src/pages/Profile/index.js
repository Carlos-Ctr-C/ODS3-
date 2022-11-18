import React, { useContext } from 'react';
import { View, Text } from "react-native";

import { AuthContext } from '../../contexts/auth';
import { HeaderApp } from "../../components/HeaderApp";
import { Ionicons } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Button } from '../../components/Button';

import { Container, AreaAulas, AreaPerfil, Sair, ButSair, PerAreaImg, PerImg, ExpArea, ExpBarra, ExpBarraProg, ExpText, ExpAreaImgRank, ExpImgRank } from './styles';

import { Card } from '../../components/Card';


import Fotoperfil from "../../assets/FotoPerfil.png";
import Fundoperfil from "../../assets/FundoPerfil.png";
import Rank from "../../assets/Rank2r.png";

export function Profile() {

    const { signOut, OpenModalAula, setVideo, setDesc,setIcon,setQnt,setNota,setNome } = useContext(AuthContext);

    function ClickAula(vid, desc,Icon,Qnt,Nota,Nome) {
        setVideo(vid);
        setDesc(desc);
        setIcon(Icon);
        setQnt(Qnt);
        setNota(Nota);
        setNome(Nome);
        OpenModalAula(vid, desc,Icon,Qnt,Nota,Nome);
    }

    return (
        <Container>
            <HeaderApp />

            <ExpArea>
                <ExpAreaImgRank>
                    <ExpImgRank source={Rank} />
                </ExpAreaImgRank>
                <ExpBarra>
                    <ExpBarraProg>
                        <ExpText> Nivel 5 </ExpText>
                    </ExpBarraProg>
                </ExpBarra>

            </ExpArea>

            <AreaPerfil source={Fundoperfil}>
                <Sair>
                    <ButSair
                    onPress={() => signOut()}>
                        <Ionicons name={'ios-exit'} size={30} />
                    </ButSair>
                </Sair>
                <PerAreaImg>
                    <PerImg source={Fotoperfil} />
                </PerAreaImg>
            </AreaPerfil>

            <AreaAulas>
                <Card
                    clickDetalhes={ClickAula}
                />
            </AreaAulas>
        </Container>
    )
}