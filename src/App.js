import React, { Component } from 'react';
import Player from './components/player/Player'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      urlToPlay: ''
    };
  }

  startClipTwo = () => {
    this.setState({
      urlToPlay: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd'
    });
  }

  startClipOne = () => {
    this.setState({
      urlToPlay: '//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to react-shaka-player test</h2>
        </div>
        <p className="App-intro">
          Click buttons below to pass new props to the player!
        </p>

        <button onClick={this.startClipOne}>Start Clip One</button>
        <button onClick={this.startClipTwo}>Start Clip Two</button>
        <Player url={this.state.urlToPlay} />
      </div>
    );
  }
}

export default App;
