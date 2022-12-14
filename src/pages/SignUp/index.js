import React from "react";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

import { Container } from "./styles";

import { Form } from "../../components/Form";
import { Header } from "../../components/Header";

export function SignUp() {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="padding" enabled>
                        <Header />
                        <Form />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Container>
    )
}