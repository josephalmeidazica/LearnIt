import * as React from 'react';
import {TextInput, View, Text} from 'react-native';
import style from './style';
import NavigationButton from '../Components/NavigationButton/Button.js';
import LinearGradient from 'react-native-linear-gradient';
import {Component} from 'react';

class Tela extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  setText(texto) {
    this.setState({text: texto});
  }

  invert(text) {
    let textString = text.toString();
    return textString.split('').reverse().join('');
  }

  render() {
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
            navigation={this.props.navigation}
            textoBotao="sdasdasdas"
            telaAlvo="Detalhes"
          />
          <TextInput
            style={style.textInput}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setText(text)}
            defaultValue={this.state.text}
          />
          <Text style={style.text}>{this.invert(this.state.text)}</Text>
        </View>
      </LinearGradient>
    );
  }
}
export default Tela;
