import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { HeaderApp } from "../../components/HeaderApp";
import {
    Container, Text, TextTitulo, Content, ButSair, Sair, AreaPerfil, PerAreaImg,
    PerImg, AreaForm, AreaInfo, ContAreaInfo, AreaIcon
} from './styles';

import Fotoperfil from "../../assets/FotoPerfil.png";
import Fundoperfil from "../../assets/FundoPerfil.png";

export function Detalhes() {
    const navigation = useNavigation();

    return (
        <Container>
            <HeaderApp />
            <Content>
                <AreaPerfil source={Fundoperfil}>
                    <PerAreaImg>
                        <PerImg source={Fotoperfil} />
                    </PerAreaImg>
                </AreaPerfil>
                <AreaForm>
                    <ContAreaInfo>
                        <AreaInfo>
                            <TextTitulo> Nome:</TextTitulo>
                            <Text>Carlos Victor Macedo Bonelly</Text>
                            <TextTitulo> Idade:</TextTitulo>
                            <Text> 21 anos</Text>
                        </AreaInfo>
                        <AreaIcon>
                            <Ionicons name='eye' size={20} />
                        </AreaIcon>
                    </ContAreaInfo>
                    <ContAreaInfo>
                        <AreaInfo>
                            <TextTitulo> Contato:</TextTitulo>
                            <Text>Telefone: (21) 91234-5678</Text>
                            <Text>Telefone: (21) 94321-8765</Text>
                        </AreaInfo>
                        <AreaIcon>
                            <Ionicons name='eye-off' size={20} />
                        </AreaIcon>
                    </ContAreaInfo>
                    <ContAreaInfo>
                        <AreaInfo>
                            <TextTitulo>Trabalho Em: </TextTitulo>
                            <Text>Rj, Duque de Caxias</Text>
                            <Text>Xxxxx, Rua Xxxxx xxx Nº: XX</Text>
                        </AreaInfo>
                        <AreaIcon>
                            <Ionicons name='eye' size={20} />
                        </AreaIcon>
                    </ContAreaInfo>
                    <ContAreaInfo>
                        <AreaInfo>
                            <Text>Possuo experiencia de trabalho à X anos, Já trabalhei na empresa Xxxxx, Xxxxxx e Xxxx  xxx</Text>
                        </AreaInfo>
                        <AreaIcon>
                            <Ionicons name='eye-off' size={20} />
                        </AreaIcon>
                    </ContAreaInfo>

                </AreaForm>
            </Content>
        </Container>

    )
}
