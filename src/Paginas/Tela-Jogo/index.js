import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TelaJogo extends React.Component {
  render() {
    const { name, hash } = this.props;
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
            0
          </span>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  name: state.user.name,
  hash: state.user.email,
});
export default connect(mapStateToProps)(TelaJogo);
TelaJogo.propTypes = {
  name: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
};
