import React, { useContext, useEffect, useRef } from "react";
import { StoreContext } from "../../context/store/storeContext";
import MixFader from "./mix-fader";
import PannelSearch from "../pannel/pannel-search";
import { CONSTANTS } from "../../utilities/utilities";
import MixVideo from "./mix-video";

let player, playerTwo;

/**
 * Tiene los botones 
 * Tiene las acciones de los botones
 * renderiza ambos videos y este componente debe tener todas las acciones
 */

//TO DO : Pasar todo a Hooks

const Mix = () => {
  
  const { state, actions } = useContext(StoreContext);
  let youtubePlayerAnchorOne = useRef(null);
  let youtubePlayerAnchorTwo = useRef(null);

  useEffect(() => {
    loadYoutube();
  }, []);
  
  const buttons =  [
    {
      type: "CURRENT",
      name: "PLAY",
      icon: "",
      function: () => {
        play();
      }
    },
    {
      type: "CURRENT",
      name: "PAUSE",
      icon: "",
      function: () => {
        pause();
      }
    },
    {
      type: "CURRENT",
      name: "STOP",
      icon: "",
      function: () => {
        stop();
      }
    },
    {
      type: "LOAD",
      name: "LOAD",
      icon: "",
      function: () => {
        toggleSearch();
      }
    }
  ]

  //VER playerssssss
  const loadYoutube = () => {
    if(!window.YT){
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      window.onYouTubeIframeAPIReady = loadVideos;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  }else{
      loadVideos();
  }
}

const loadVideos = () => {

  player = new window.YT.Player(youtubePlayerAnchorOne, {
    videoId: "S-sJp1FfG7Q",
    width: "100%",
    height: "100%",
    playerVars: {
      controls: 0,
      rel: 0
    },
    events: {
      onReady: onReadyYoutube
    }
  });

  playerTwo = new window.YT.Player(youtubePlayerAnchorTwo, {
    videoId: "zzkf4x1grXY",
    width: "100%",
    height: "100%",
    playerVars: {
      controls: 0,
      rel: 0
    },
    events: {
      onReady: onReadyYoutube
    }
  });

}
  const onReadyYoutube = event => {
    event.target.setVolume(50);
  };

  //BUTTONS EVENTS
  const play = () => {
    const { mix } = state,
      selected = mix.selected;
    selected === 0
      ? player.playVideo()
      : playerTwo.playVideo().playVideo();
  };
  const stop = () => {
    const { mix } = state,
      selected = mix.selected;
    selected === 0 ? player.stopVideo() : playerTwo.stopVideo();
  };
  const pause = () => {
    const { mix } = state,
      selected = mix.selected;
    selected === 0 ? player.pauseVideo() : playerTwo.pauseVideo();
  };
  const setSound = sound => {
    const { mix } = state,
      selected = mix.selected;
    selected === 0
      ? player.loadVideoById(sound, 0, CONSTANTS.QUALITY)
      : playerTwo.loadVideoById(sound, 0, CONSTANTS.QUALITY);
    actions.search.toggleSearch();
  };
  const toggleSearch = () => {
    actions.search.toggleSearch();
    const find = document.documentElement.getElementsByClassName("find")[0];
    find.focus();
  }
  const setFaderMix = position => {
    const { total } = state.mix,
      porcSecondTrack = (position * 100) / total,
      porcFirstTrack = 100 - porcSecondTrack;
    player.setVolume(porcFirstTrack);
    playerTwo.setVolume(porcSecondTrack);
  };
  const onPointerHandle = (e) => {
    const { mix } = state;
    if (!mix.fader) {
      return;
    } else {
      let left = e.screenX;
      if (left > mix.total - 10) {
        left = mix.total - 10;
      } else if (left < 20) {
        left = 10;
      }
      actions.mix.setPositionFaderMix(left);
      setFaderMix(mix.positionFader);
    }
  };

  const fillButtons = () => {
    return buttons.map((button, i) => {
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

  const content = () => {
    return (
      <React.Fragment>
        <div
          className="mix"
          onPointerMove={e => {
            onPointerHandle(e);
          }}
        >
          <MixVideo videoNumber={0} reference={r => { youtubePlayerAnchorOne = r; }} />
          <MixFader />
          <MixVideo videoNumber={1} reference={r => { youtubePlayerAnchorTwo = r; }} />
          <PannelSearch setSound={setSound} />
        </div>
        <div className="buttons">{fillButtons()}</div>
      </React.Fragment>
    );
  };
  return content();
}
export default Mix;
