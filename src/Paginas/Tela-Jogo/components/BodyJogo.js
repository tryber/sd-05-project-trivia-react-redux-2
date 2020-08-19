import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Respostas from './Respostas';
import { answerQuestions, nextQuestion } from '../../../Redux/Action/UserAction';

class BodyJogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, timer: 30, counter: 1 };
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate() {
    const { timer } = this.state;
    const { respondido, answer } = this.props;
    if (timer === 0 || respondido) {
      clearInterval(this.myTimer);
      answer();
    }
  }

  startTimer() {
    this.myTimer = setInterval(() => {
      this.setState(({ timer }) => ({
        timer: timer - 1,
      }));
    }, 1000);
  }

  nextQuestion() {
    const { next } = this.props;
    const { index, counter } = this.state;
    next();
    this.setState({ timer: 30, index: (index + 1) % 5, counter: counter + 1 });
    this.startTimer();
  }

  render() {
    const { questions, respondido } = this.props;
    const { index, timer, counter } = this.state;
    if (counter > 5) return <Redirect to="/feedback" />;
    return Object.values(questions).length > 0 ? (
      <div>
        <div data-testid="question-category">{questions[index].category}</div>
        <div data-testid="question-text">{questions[index].question}</div>
        <Respostas
          difficulty={questions[index].difficulty}
          timer={timer}
          incorrect={questions[index].incorrect_answers}
          correct={questions[index].correct_answer}
        />
        {respondido ? (
          <button data-testid="btn-next" type="button" onClick={() => this.nextQuestion()}>
            Proxima Pergunta
          </button>
        ) : (
          <div>{timer}</div>
        )}
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

const mapDispatchToProps = {
  answer: answerQuestions,
  next: nextQuestion,
};

const mapStateToProps = (state) => ({
  questions: state.api.questions,
  respondido: state.user.respondido,
});

export default connect(mapStateToProps, mapDispatchToProps)(BodyJogo);

BodyJogo.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  respondido: PropTypes.bool.isRequired,
  answer: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};
