import React from 'react';
import Clickable from './Clickable.js';

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
    }
  }

  reset() {
    this.setState({
      score: 0,
    })
  }

  updateScore() {
    const new_score = this.state.score + 1;
    this.setState({
      score: new_score,
    });
  }

  render() {
    return (
      <div>
        <div>
          <Score score={this.state.score} />
          <Reset onClick={() => this.reset()} />
        </div>
        <Clickable onClick={() => this.updateScore()} />
      </div>
    );
  }
}

function Score(props) {
  return (
    <p>
      Score: {props.score}
    </p>
  );
}

function Reset(props) {
  return (
    <button onClick={props.onClick}>
      Reset
    </button>
  );
}

function Timer(props) {
}

export default Game;
