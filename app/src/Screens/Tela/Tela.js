import * as React from 'react';
import {Button, View, Text} from 'react-native';
import style from './style';

function Tela({navigation}) {
  return (
    <View style={style.View}>
      <Text>Tela</Text>
      <Button
        style={style.View}
        title="Detalhes aaaaa"
        onPress={() => navigation.navigate('Detalhes')}
      />
    </View>
  );
}

export default Tela;
