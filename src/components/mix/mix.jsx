import React, { Component } from "react";
import MixFader from "./mix-fader";
import PannelSearch from "../pannel/pannel-search";
import { CONSTANTS } from "../../utilities/utilities";
import MixVideo from "./mix-video";

let loadYT;

/**
 * Tiene los botones 
 * Tiene las acciones de los botones
 * renderiza ambos videos y este componente debe tener todas las acciones
 */

class Mix extends Component {
  state = {
    positionFader: window.innerWidth / 2 - 5,
    total: window.innerWidth,
    buttons: [
      {
        type: "CURRENT",
        name: "PLAY",
        icon: "",
        function: () => {
          this.play();
        }
      },
      {
        type: "CURRENT",
        name: "PAUSE",
        icon: "",
        function: () => {
          this.pause();
        }
      },
      {
        type: "CURRENT",
        name: "STOP",
        icon: "",
        function: () => {
          this.stop();
        }
      },
      {
        type: "LOAD",
        name: "LOAD",
        icon: "",
        function: () => {
          this.toggleSearch();
        }
      }
    ]
  };
  componentDidMount = () => {
    if (loadYT === undefined) {
      this.loadYoutube();
    }
  };
  loadYoutube = () => {
    loadYT = new Promise((resolve, reject) => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      return window.onYouTubeIframeAPIReady = () => resolve(window.YT)
    });
    
    loadYT
      .then(YT => {
        this.player = new YT.Player(this.youtubePlayerAnchorOne, {
          videoId: "S-sJp1FfG7Q",
          width: "100%",
          height: "100%",
          playerVars: {
            controls: 0,
            rel: 0
          },
          events: {
            onReady: this.onReadyYoutube
          }
        });
        this.playerTwo = new YT.Player(this.youtubePlayerAnchorTwo, {
          videoId: "zzkf4x1grXY",
          width: "100%",
          height: "100%",
          playerVars: {
            controls: 0,
            rel: 0
          },
          events: {
            onReady: this.onReadyYoutube
          }
        });
      })
      .catch(err => {
        debugger
        console.log(err);
      });
  };
  onReadyYoutube = event => {
    event.target.setVolume(50);
  };
  //BUTTONS EVENTS
  setSelected = trackNumber => {
    this.props.setSelected(trackNumber);
  };
  play = () => {
    const { trackStates } = this.props,
      selected = trackStates.get("selected");
    selected === 0
      ? this.player.playVideo()
      : this.playerTwo.playVideo().playVideo();
  };
  stop = () => {
    const { trackStates } = this.props,
      selected = trackStates.get("selected");
    selected === 0 ? this.player.stopVideo() : this.playerTwo.stopVideo();
  };
  pause = () => {
    const { trackStates } = this.props,
      selected = trackStates.get("selected");
    selected === 0 ? this.player.pauseVideo() : this.playerTwo.pauseVideo();
  };
  setSound = sound => {
    const { trackStates } = this.props,
      selected = trackStates.get("selected");
    selected === 0
      ? this.player.loadVideoById(sound, 0, CONSTANTS.QUALITY)
      : this.playerTwo.loadVideoById(sound, 0, CONSTANTS.QUALITY);
    this.props.toggleSearch();
  };
  toggleSearch() {
    this.props.toggleSearch();
    const find = document.documentElement.getElementsByClassName("find")[0];
    find.focus();
  }
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
  setFaderMix = position => {
    const { total } = this.state,
      porcSecondTrack = (position * 100) / total,
      porcFirstTrack = 100 - porcSecondTrack;
      this.player.setVolume(porcFirstTrack);
      this.playerTwo.setVolume(porcSecondTrack);
  };
  onPointerHandle = (e) => {
    const { trackStates } = this.props;
    if(!trackStates.get("fader")){
      return;
    }else{
      let left = e.screenX;
      if(left>this.state.total - 10){
        left = this.state.total - 10;
      }else if(left<20){
        left = 10;
      }
      this.setState({positionFader:left},()=>{
        this.setFaderMix(this.state.positionFader)
      });
    }
  };
  content = () => {
    debugger
    return (
      <React.Fragment>
        <div
          className="mix"
          onPointerMove={e => {
            this.onPointerHandle(e);
          }}
        >
          <MixVideo setSelected={this.setSelected} videoNumber={0} reference={r => {this.youtubePlayerAnchorOne = r;}} {...this.props} />
          <MixFader setFaderMix={this.setFaderMix} {...this.props} positionFader={this.state.positionFader}/>
          <MixVideo setSelected={this.setSelected} videoNumber={1} reference={r => {this.youtubePlayerAnchorTwo = r;}} {...this.props} />
          <PannelSearch {...this.props} setSound={this.setSound} />
        </div>
        <div className="buttons">{this.fillButtons()}</div>
      </React.Fragment>
    );
  };
  render = () => {
    return this.content();
  };
}

export default Mix;
