import React from "react";

import { Container } from "../SignUp/styles";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { HeaderIn } from "../../components/HeaderIn";
import { FormIn } from "../../components/FormIn";


export function SignIn() {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <HeaderIn />
                    <FormIn />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Container>
    )
}