import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
    background-color: #FFF;
`;
export const AreaPerfil = styled.ImageBackground`
    flex: 3;
    border: 3px;
`;
export const PerAreaImg = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: flex-end;
`;

export const PerImg = styled.ImageBackground`
    width: 100px;
    height: 100px;
`;
export const AreaForm = styled.View`
    flex: 6;
`;
export const ContAreaInfo = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    background-color: #dddddd;
    margin: 5px 10px;
`;
export const AreaInfo = styled.View`
    flex: 3;
    align-items: flex-start;
    margin: 15px;
    padding-left: 20px;
`;
export const AreaIcon = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Sair = styled.View`
    flex: 1;
    align-items: flex-end;
    justify-content: flex-start;
`;

export const ButSair = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
    border: 2px;
    margin: 13px;
    border-radius: 10px;
    background-color: #02735Edd;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    color: #0006;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
`;
export const TextTitulo = styled.Text`
    color: #000;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
`