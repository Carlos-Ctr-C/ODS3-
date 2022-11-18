import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #0007;
`;
export const CloseArea = styled.TouchableOpacity`
    flex: 2;
    width: 100%;
    background-color: #0007;
`;
export const Content = styled.View`
    flex: 6;
    
    width: 100%;
`;
export const CloseArea2 = styled.TouchableOpacity`
    flex: 2;
    width: 100%;
    background-color: #0007;
`;

export const Header = styled.View`
    height: 10%;
    background-color: #02735E;
    border: 1px;
    border-color: #0007;
    align-items: flex-end;
`;

export const Icone = styled.ImageBackground`
    width: 22px;
    height: 22px;
`;
export const Info = styled.View`
    flex: 1;
    background-color: #fafafa;
    align-items: center;
    justify-content: flex-start;
    border: 1px;
    border-color: #0007;
`;

export const AreaVideo = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const AreaInfoDesc = styled.View`
    flex: 1;
    width: 95%;
`;

export const AreaDescAtv = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
`;
export const AreaInfoProf = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    flex-direction: row;
`;

export const AreaTextProf = styled.View`
    flex: 1;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
`;
export const AreaNotaProf = styled.View`
    flex: 1;
    height: 100%;
    align-items: flex-end;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: 1px;
    background-color: red;
    border-color: red;
`;

export const Text = styled.Text`
    color: #000000;
    font-size: 15px;
    font-weight: 600;
    text-align: left;
    text-align-last: left;
`;
export const TextOpacity = styled.Text`
    color: #808080;
    font-size: 10px;
    font-weight: 600;
`;