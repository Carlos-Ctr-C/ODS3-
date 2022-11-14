import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const ExpArea = styled.View`
    flex: 1;
    background-color: #02735E88;
    flex-direction: row;
    justify-content: space-around;
`;

export const ExpAreaImgRank = styled.View`
    /* width: 70px;
    height: 70px;
    border-radius: 35px;
    align-items: center;
    background-color: #02735E; */
    flex: 1;
    justify-content: center;
    align-items: center;
    
`;

export const ExpImgRank = styled.ImageBackground`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: 1px;
    justify-content: center;
    align-items: center;
`;

export const ExpBarra = styled.View`
    flex: 3;
    height: 50%;
    border-radius: 50px;
    margin: 6%;
    align-items: flex-start;
    background-color: silver;
`;
export const ExpBarraProg = styled.View`
    font-size: 15px;
    width: 70%;
    height: 100%;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    background-color: darkgreen;
    
    flex: 1;
`;

export const ExpText = styled.Text`
    font-size: 17px;
    color: #cccccc;

`;

export const AreaPerfil = styled.ImageBackground`
    flex: 2;
    border: 3px;
    
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

export const PerAreaImg = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: flex-end;
    
`;

export const PerImg = styled.ImageBackground`
    width: 80px;
    height: 80px;
`;

export const AreaAulas = styled.View`
    flex: 6;
    background-color: #02735E;
    align-items: center;
    flex-direction: row;
`;