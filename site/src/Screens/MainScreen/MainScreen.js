import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email: '',senha: ''};
  
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeSenha = this.handleChangeSenha.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeEmail(event) {
      this.setState({email: event.target.email});
    }

    handleChangeSenha(event) {
        this.setState({senha: event.target.senha});
      }
  
    handleSubmit(event) {
      alert('Dados de login: ' + this.state.email + '' + this.state.senha);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
          </label>
          <label>
            Senha:
            <input type="password" value={this.state.senha} onChange={this.handleChangeSenha} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      );
    }
  }
  
  class Background extends React.Component {
    render() {
      return (
        <NameForm />
      );
    }
  }
  
  class MainScreen extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Background />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  export default MainScreen;