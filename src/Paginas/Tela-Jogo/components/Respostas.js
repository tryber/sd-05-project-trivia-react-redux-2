import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { giveScore, answerQuestions } from '../../../Redux/Action/UserAction';

const dif = {
  easy: 1,
  medium: 2,
  hard: 3,
};

class Respostas extends React.Component {
  constructor(props) {
    super(props);
    this.answerQuestion = this.answerQuestion.bind(this);
  }

  answerQuestion(resposta, timer, difficulty) {
    const { score, answer } = this.props;
    if (resposta) {
      const value = 10 + (timer * dif[difficulty]);
      score(value);
    }
    answer();
  }

  render() {
    const { correct, incorrect, respondido, timer, difficulty } = this.props;
    return (
      <div>
        <button
          onClick={() => this.answerQuestion(true, timer, difficulty)}
          className={respondido ? 'certa' : null}
          data-testid="correct-answer"
          disabled={respondido}
        >
          {correct}
        </button>
        {incorrect.map((answer, index) => (
          <button
            onClick={() => this.answerQuestion(false)}
            key={answer}
            className={respondido ? 'err' : null}
            data-testid={`wrong-answer-${index}`}
            disabled={respondido}
          >
            {answer}
          </button>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = {
  score: giveScore,
  answer: answerQuestions,
};

const mapStateToProps = (state) => ({
  respondido: state.user.respondido,
  state: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Respostas);

Respostas.propTypes = {
  score: PropTypes.func.isRequired,
  answer: PropTypes.func.isRequired,
  respondido: PropTypes.bool.isRequired,
  correct: PropTypes.string.isRequired,
  incorrect: PropTypes.arrayOf(PropTypes.string).isRequired,
  timer: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
};
