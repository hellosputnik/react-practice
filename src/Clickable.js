import React from 'react';

class Clickable extends React.Component {
  render() {
    const style = {
      position: 'absolute',
      left: getRandomInt(0, 1000),
      top: getRandomInt(0, 1000),
    }

    return (
      <button onClick={this.props.onClick} style={style}>
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
