import React, { useState } from 'react';
import { Container, Image, D } from './styles';
import { FlatList } from "react-native";

import List from '../List';

export function Card() {

    const [list, useList] = useState(List)

    return (
        <D>
            <FlatList
                data={list}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) =>
                    <Container>
                        <Image
                            source={item.Img}
                        />
                    </Container>
                }
            />
        </D>
    );
}
