import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { dadosJogador } from '../../Redux/Action/UserAction';
import { fetchToken, fetchQuestions } from '../../Redux/Action/apiAction';

class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', redirect: false };
    this.receberApi = this.receberApi.bind(this);
  }

  receberApi() {
    const { name, email } = this.state;
    const { chave, questions, playerDados } = this.props;
    chave().then(({ token }) => {
      questions(token);
      localStorage.setItem('token', token);
    });
    playerDados(name, email);
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
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <input
          data-testid="input-gravatar-email"
          type="text"
          placeholder="email"
          onChange={(event) => this.setState({ email: event.target.value })}
        />
        <button
          data-testid="btn-play"
          type="button"
          onClick={this.receberApi}
          disabled={!(name && email)}
        >
          Jogar
        </button>
        <Link to="/config"><button data-testid="btn-settings" type="button">Setting</button></Link>
      </div>
      );
  }
}
const mapDispatchToProps = {
  chave: fetchToken,
  questions: fetchQuestions,
  playerDados: dadosJogador,
};
export default connect(null, mapDispatchToProps)(Inicio);
Inicio.propTypes = {
  questions: PropTypes.func.isRequired,
  chave: PropTypes.func.isRequired,
  playerDados: PropTypes.func.isRequired,
};
