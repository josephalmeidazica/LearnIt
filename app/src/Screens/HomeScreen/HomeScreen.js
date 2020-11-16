import * as React from 'react';
import {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import logo from '../../Assets/Images/index.js';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onHandleChangeTexto(texto) {
    this.setState({texto: texto});
  }

  render() {
    return (
      <View style={styles.View}>
        <Image source={logo} height={50} />
        <View style={{height: 400}}>
          <Swiper
            style={styles.wrapper}
            height={250}
            horizontal={true}
            autoplay>
            <View style={styles.slide}>
              <Icon
                name="book"
                type="font-awesome"
                size={100}
                color="#92BBD9"
              />
              <Text style={styles.slideMainText}>
                Organize materiais de estudo
              </Text>
              <Text style={styles.slideSecondText}>
                Mantenha todo o material no mesmo lugar de facil acesso
              </Text>
            </View>
            <View style={styles.slide}>
              <Icon
                name="users"
                type="font-awesome"
                size={100}
                color="#92BBD9"
              />
              <Text style={styles.slideMainText}>
                Mantenha o contato com alunos e colegas
              </Text>
              <Text style={styles.slideSecondText}>
                Organize turmas online e torne a comunicação mais facil
              </Text>
            </View>
            <View style={styles.slide}>
              <Icon
                name="tasks"
                type="font-awesome"
                size={100}
                color="#92BBD9"
              />
              <Text style={styles.slideMainText}>
                Facilite a entrega de atividades
              </Text>
              <Text style={styles.slideSecondText}>
                Deixe seus materiais num só lugar e acesse com facilidade
              </Text>
            </View>
          </Swiper>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Cadastro')}>
          <Text style={styles.textButton}>Cadastro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Detalhes')}>
          <Text>Já tenho uma conta</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default HomeScreen;
