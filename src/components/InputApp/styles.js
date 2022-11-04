import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    margin-bottom: 8px;
    padding: 18px;
`;

export const IconContainer = styled.TouchableOpacity`
    height: 56px;
    width: 55px;
    justify-content: center;
    align-items: center;
    background-color: #cecece;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const InputText = styled.TextInput`
    flex: 1;
    background-color: #cecece;
    color: #272635;
    padding: 0 15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

  
`;