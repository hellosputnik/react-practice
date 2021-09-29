import React from 'react';

import Clickable from './Clickable.js';

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      timer: 0,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  reset() {
    this.resetScore();
    this.resetTimer();
  }

  resetScore() {
    this.setState({
      score: 0,
    })
  }

  resetTimer() {
    this.setState({
      timer: 0,
    })
  }

  tick() {
    const elapsed_seconds = this.state.timer + 1;
    this.setState({
      timer: elapsed_seconds,
    });
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
          <Label title="Score" value={this.state.score} />
          <Label title="Timer" value={this.state.timer} />
          <SimpleButton title="Reset" onClick={() => this.reset()} />
        </div>
        <Clickable onClick={() => this.updateScore()} />
      </div>
    );
  }
}

function Label(props) {
  return (
    <p>
      {props.title}: {props.value}
    </p>
  );
}

function SimpleButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.title}
    </button>
  );
}

export default Game;
