import React from 'react';
import { fetchToken, fetchQuestions } from '../../Redux/Action/apiAction';
import { connect } from 'react-redux';
import { MD5 } from 'crypto-js';
import { dadosJogador } from '../../Redux/Action/UserAction';
import { Redirect } from 'react-router-dom';
class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', redirect: false };
    this.receberApi = this.receberApi.bind(this);
  }
  receberApi() {
    const { name, email } = this.state;
    const { fetchToken, fetchQuestions, playerDados } = this.props;
    fetchToken().then(({ token }) => {
      fetchQuestions(token);
    });
    playerDados(name, MD5(email).toString());
    this.setState({ redirect: true });
  }
  render() {
    const { name, email, redirect } = this.state;
    return redirect ? (
      <Redirect to="/game" />
    ) : (
      <div>
        <input
          data-testid="input-player-name"
          type="text"
          placeholder="name"
          onChange={(event) =>
            this.setState({
              name: event.target.value,
            })
          }
        />
        <input
          data-testid="input-gravatar-email"
          type="text"
          placeholder="email"
          onChange={(event) =>
            this.setState({
              email: event.target.value,
            })
          }
        />
        <button
          data-testid="btn-play"
          type="button"
          onClick={this.receberApi}
          disabled={name && email ? false : true}
        >
          Jogar
        </button>
        <button data-testid="btn-settings" type="button">
          Configurações
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = {
  fetchToken,
  fetchQuestions,
  playerDados: dadosJogador,
};
export default connect(null, mapDispatchToProps)(Inicio);
