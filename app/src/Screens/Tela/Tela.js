import * as React from 'react';
import {useState} from 'react';
import {TextInput, View, Text, Image} from 'react-native';
import style from './style';
import NavigationButton from '../Components/NavigationButton/Button.js';
import LinearGradient from 'react-native-linear-gradient';

function Tela({navigation}) {
  const [text, setText] = useState('');

  function invert(text) {
    let textString = text.toString();
    return textString.split('').reverse().join('');
  }

  return (
    <LinearGradient
      colors={['#00A896', '#457B9D']}
      style={style.linearGradient}>
      <View style={style.View}>
        {/*<Button
        style={style.View}
        title="Detalhes aaaaa"
        onPress={() => navigation.navigate('Detalhes')}
      />*/}
        <NavigationButton
          navigation={navigation}
          textoBotao="sdasdasdas"
          telaAlvo="Detalhes"
        />
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text style={{padding: 10, fontSize: 42, color: 'white'}}>
          {invert(text)}
        </Text>
      </View>
    </LinearGradient>
  );
}

export default Tela;
