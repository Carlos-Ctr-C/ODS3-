import React, { useEffect, useState } from "react";
import { FlatList } from 'react-native';
import { HeaderApp } from "../../components/HeaderApp";

import { EXPENSES } from '../../utils/expenses';

import { Card, CardProps } from '../../components/GraficCard';
import { Header, MonthsProps } from '../../components/GraficHeader';

import { Container, Content, Chart,AreaCard } from './styles';
import { VictoryPie, VictoryTooltip } from "victory-native";
import { MONTHS } from "../../utils/months";

export function Grafic() {
  const [selected, setSelected] = useState("");
  const [month, setMonth] = useState<MonthsProps>("Outubro");
  const [data, setData] = useState<CardProps[]>([]);

  function handleCardOnPress(id: string) {
    setSelected(prev => prev === id ? "" : id);
  }

  useEffect(() => {
    setData(EXPENSES[month])

  }, [month]);

  return (
    <Container>
      <HeaderApp />
      <Content>
        <Header
          onValueChange={setMonth}
          selectedValue={month}
        />

        <Chart>
          <VictoryPie
            data={data}
            x="label"
            y="value"
            colorScale={data.map(expense => expense.color)}
            innerRadius={70}
            labelRadius={125}
            padAngle={4}
            animate={{
              easing: "circleOut"
            }}
            style={{
              labels: {
                fill: "#FFF"
              },
                data:{
                  fillOpacity: ({ datum }) => (datum.id === selected || selected === "") ? 1 : 0.3,
                }  
            }}
            
          labelComponent={
            <VictoryTooltip
              renderInPortal={false}
              flyoutStyle={{
                stroke: 0,
                fill: ({ datum }) => datum.color
              }}
            />
          }
          />
        </Chart>

        <AreaCard>
        <FlatList
          data={EXPENSES[month]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Card
              data={item}
              selected={false}
              onPress={() => handleCardOnPress(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
        </AreaCard>
      </Content>
    </Container>
  );
}