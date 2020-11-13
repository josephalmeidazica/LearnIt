import * as React from 'react';
import {Button, View, Text} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

class NavvigationButton extends React.Component {
  static propTypes = {
    textoBotao: PropTypes.string.isRequired,
    telaAlvo: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
  };
  render() {
    return (
      <View style={style.View}>
        <Button
          style={style.View}
          title={this.props.textoBotao}
          onPress={() => this.props.navigation.navigate(this.props.telaAlvo)}
        />
      </View>
    );
  }
}

export default NavvigationButton;
