import React, { Component } from "react";
import Mix from "../mix/mix";
import Button from "../buttons/button";
import ButtonLoad from "../buttons/button-load";
import Pizzicato from "pizzicato";
import YouTubePlayer from "youtube-player";

let firstSound = YouTubePlayer();
let secondSound = YouTubePlayer();

class Pannel extends Component {
  pause = () => {
    this.props.pause();
  };

  play = () => {
    const { trackStates, setPlaying } = this.props,
      selected = trackStates.get("selected");
    selected === 0 ? firstSound.playVideo() : secondSound.playVideo();
  };

  stop = () => {
    const { trackStates } = this.props,
      selected = trackStates.get("selected");
    selected === 0 ? firstSound.stopVideo() : secondSound.stopVideo();
  };

  setSound = sound => {
    const { trackStates } = this.props,
      selected = trackStates.get("selected");
    selected === 0 ? (firstSound = sound) : (secondSound = sound);
  };

  toggleSearch = () => {
    this.props.toggleSearch();
  };

  createSound = file => {
    const { setSound } = this;
    if (file) {
      let sound = new Pizzicato.Sound(
        {
          source: "file",
          options: { path: file, volume: 0.5 }
        },
        function() {
          sound.play();
          setSound(sound);
        }
      );
    }
  };

  fillButtons = () => {
    return this.state.buttons.map((button, i) => {
      return (
        <div key={i} className={button.name.toLowerCase() + " button"}>
          <button
            onClick={() => {
              button.function();
            }}
          >
            {button.name}
          </button>
        </div>
      );
    });
  };

  content = () => {
    return (
      <div
        className="pannel"
      >
        <Mix {...this.props} setFaderMix={this.setFaderMix}/>
      </div>
    );
  };

  render = () => {
    return this.content();
  };
}

export default Pannel;
