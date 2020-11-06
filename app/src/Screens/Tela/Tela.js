import * as React from 'react';
import {Button, View, Text} from 'react-native';
import style from './style';
import NavigationButton from '../Components/NavigationButton/Button.js';

function Tela({navigation}) {
  return (
    <View style={style.View}>
      <Text>Tela</Text>
      {/*<Button
        style={style.View}
        title="Detalhes aaaaa"
        onPress={() => navigation.navigate('Detalhes')}
      />*/}
      <NavigationButton
        navigation={navigation}
        textoBotao="bicas"
        telaAlvo="Detalhes"
      />
    </View>
  );
}

export default Tela;
