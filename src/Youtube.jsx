// js
import React from 'react';
import YouTube from 'react-youtube';

class YT extends React.Component {
  render() {
    const opts = {
      height: '350',
      width: '350',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return <YouTube className={"card"} style={{width: '18rem'}} videoId={this.props.videoID} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YT;

