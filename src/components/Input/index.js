import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

import { Container, IconContainer, InputText } from './styles';

export function Input({ icon, value, ...rest }) {

  const [valor, setValor] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
    
  }

  function handleInputBlur() {
    setIsFocused(false);
    
    if(valor){
      setIsFocused(true);
    }
   
  }

  return (
    <Container >
      <IconContainer>
        <Ionicons
          name={icon}
          size={24}
          color={(isFocused ) ? '#038C3E' : '#a6a6a8'}
        />
      </IconContainer>

      <InputText
        onFocus={()=> handleInputFocus()}
        onBlur={()=> handleInputBlur()}
        isFocused={isFocused}
        onChangeText={ text => setValor(text)}
        value={valor}
        {...rest}
      />
    </Container>
  );
}