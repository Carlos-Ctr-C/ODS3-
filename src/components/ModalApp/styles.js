import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #0007;
`;
export const Content = styled.View`
    width: 60%;
    height: 50%;
`;

export const Header = styled.View`
    height: 10%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: darkgreen;
    border: 1px;
    border-color: #0007;
`;

export const Text = styled.Text`
    color: #272635;
    font-size: 18px;
    font-weight: 600;
`;

export const Icone = styled.ImageBackground`
    width: 80px;
    height: 80px;
    background-color: antiquewhite;
    justify-content: center;
    align-items: center;

`;
export const Info = styled.View`
    flex: 1;
    background-color: #fafafa;
    align-items: center;
    justify-content: center;
    border: 1px;
    border-color: #0007;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const Button = styled.TouchableOpacity`
    height: 80px;
    width: 80px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: 1px;
    border-radius: 10px;
    background-color: darkgreen;
    border-color: #000;
`;