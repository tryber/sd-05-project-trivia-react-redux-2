import React from 'react';
import { connect } from 'react-redux';
import { MD5 } from 'crypto-js';
import PropTypes from 'prop-types';

class HeaderJogo extends React.Component {
  render() {
    const { name, hash, score } = this.props;
    return (
      <div>
        <header>
          <img
            data-testid="header-profile-picture"
            src={`https://www.gravatar.com/avatar/${hash}`}
            alt="img"
          />
          <span data-testid="header-player-name" name="">
            {name}
          </span>
          <span data-testid="header-score" name="">
            {score}
          </span>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  name: state.user.player.name,
  hash: MD5(state.user.email).toString(),
  score: state.user.player.score,
});
export default connect(mapStateToProps)(HeaderJogo);
HeaderJogo.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
};
