import React from 'react';

class Clickable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      left: 128,
      top: 128,
    };
  }

  handleClick() {
    this.props.onClick();

    const new_left = getRandomInt(128, 1000);
    const new_top = getRandomInt(128, 1000);

    this.setState({
      left: new_left,
      top: new_top,
    });
  }

  render() {
    const style = {
      position: 'absolute',
      left: this.state.left,
      top: this.state.top,
    }

    return (
      <button onClick={() => this.handleClick()} style={style}>
        Target
      </button>
    );
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

export default Clickable;
