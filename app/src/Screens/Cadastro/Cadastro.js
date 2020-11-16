import * as React from 'react';
import {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Input} from 'react-native-elements';
import logo from '../../Assets/Images/index.js';
import CadastroService from '../../services/Cadastro/CadastroService.js';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        nome: 'joseph',
        email: 'joseph@gmail.com',
        senha: '123456',
      },
      errorNome: '',
      errorEmail: '',
      errorSenha: '',
      errorMessage: '',
    };
  }

  onHandleChangeNome(nome) {
    this.setState({
      user: {
        ...this.state.user,
        nome: nome,
      },
    });
    if (this.state.user.nome.length <= 3 && this.state.user.nome != null) {
      this.setState({errorNome: 'Insira um nome válido'});
    } else {
      this.setState({errorNome: ''});
    }
  }

  onHandleChangeEmail(email) {
    var re = /\S+@\S+\.\S+/;
    this.setState({
      user: {
        ...this.state.user,
        email: email,
      },
    });
    if (
      this.state.user.email.length <= 8 &&
      this.state.user.email != null &&
      !re.test(this.state.user.email)
    ) {
      this.setState({errorEmail: 'Insira um email válido'});
    } else {
      this.setState({errorEmail: ''});
    }
  }

  onHandleChangeSenha(senha) {
    this.setState({
      user: {
        ...this.state.user,
        senha: senha,
      },
    });
    if (this.state.user.senha.length < 5 && this.state.user.senha != null) {
      this.setState({
        errorSenha: 'Insira uma senha válida (Min. 5 caracteres)',
      });
    } else {
      this.setState({errorSenha: ''});
    }
  }

  cadastro() {
    CadastroService.cadastrarNovoUsuario(this.state.user)
      .then((data) => {
        console.log(data);
        this.setState({errorMessage: 'sucesso'});
      })
      .catch((error) => {
        console.log('1' + error);
        this.setState({errorMessage: error.message});
      });
  }

  render() {
    return (
      <View style={styles.View}>
        <Image source={logo} height={50} />
        <Input
          placeholder="Nome"
          placeholderTextColor="#92BBD9"
          leftIcon={{type: 'font-awesome', name: 'user', color: '#92BBD9'}}
          style={styles.input}
          label="Nome"
          errorStyle={{color: 'red'}}
          errorMessage={this.state.errorNome}
          onChangeText={(value) => this.onHandleChangeNome(value)}
        />
        <Input
          placeholder="exemplo@gmail.com"
          placeholderTextColor="#92BBD9"
          leftIcon={{type: 'font-awesome', name: 'envelope', color: '#92BBD9'}}
          style={styles.input}
          label="E-mail"
          errorStyle={{color: 'red'}}
          errorMessage={this.state.errorEmail}
          onChangeText={(value) => this.onHandleChangeEmail(value)}
        />
        <Input
          placeholder="*****"
          type="password"
          label="Senha"
          secureTextEntry={true}
          placeholderTextColor="#92BBD9"
          leftIcon={{type: 'font-awesome', name: 'lock', color: '#92BBD9'}}
          style={styles.input}
          errorStyle={{color: 'red'}}
          errorMessage={this.state.errorSenha}
          onChangeText={(value) => this.onHandleChangeSenha(value)}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.cadastro()}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
        <Text>{this.state.user.nome}</Text>
        <Text>{this.state.user.email}</Text>
        <Text>{this.state.user.senha}</Text>
        <Text>{this.state.errorMessage}</Text>
      </View>
    );
  }
}
export default Cadastro;
