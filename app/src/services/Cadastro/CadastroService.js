import axios from 'axios';

class CadastroService {
  cadastrarNovoUsuario(user) {
    console.log(user);
    return new Promise((resolve, reject) => {
      axios
        .post('http://10.0.2.2:3000/newUser', {user})
        .then((response) => {
          if (response.data.success) {
            resolve(response.data);
          } else {
            reject(response.error);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}

const instance = new CadastroService();

export default instance;
