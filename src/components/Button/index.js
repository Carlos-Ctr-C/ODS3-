import React from 'react';
import { Container, Title } from './styles';

export function Button({ title, ...rest }) {
  return (
    <Container {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}