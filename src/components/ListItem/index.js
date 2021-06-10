import React from 'react';
import { View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { ContainerButton, Item } from './styles';

export default function ListItem() {
  return (
    <View>
      <ContainerButton
        activeOpacity={0.9}
      >
        <Feather
          name='link'
          color='#FFF'
          size={24}
        />
        <Item
          numberOfLines={1}
        >
          http://youtube.com
        </Item>
      </ContainerButton>
    </View>
  )
}