import React from "react";
import { Picker } from '@react-native-picker/picker';

import { Container, Title } from './styles';

import { MONTHS } from '../../utils/months';

export type MonthsProps = "Outubro" | "Novembro" | "Dezembro";

type Props = {
  selectedValue: MonthsProps;
  onValueChange: (value: MonthsProps) => void;
}

export function Header({ selectedValue, onValueChange }: Props) {
  return (
    <Container>
      <Title>Categorias</Title>

      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue: MonthsProps) => onValueChange(itemValue)}
        style={{
          backgroundColor: "#FFF",
          height: 60,
          flex: 1,
          marginLeft: 50
        }}
      >
        {
          MONTHS.map(item => (
            <Picker.Item
              key={item.label}
              label={item.label}
              value={item.label}
            />
          ))
        }
      </Picker>
    </Container>
  );
}