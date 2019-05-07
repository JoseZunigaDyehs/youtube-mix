import React, { useContext, useEffect, useRef, useState } from "react";
import { StoreContext } from "../../context/store/storeContext";

import IsFetching from '../modules/isFetching';

import MixFader from "./mix-fader";
import PannelSearch from "../pannel/pannel-search";
import { CONSTANTS } from "../../utilities/utilities";
import Video from "../video/video";

let player, playerTwo;

/**
 * Tiene los botones 
 * Tiene las acciones de los botones
 * renderiza ambos videos y este componente debe tener todas las acciones
 */

/**
 * Crea Iframes from youtube API
 * Usa ref para la referencia de ambos iframes
 * 
 * TODO: Pasar todas las funcionalidades a los controles
 */

const Pannel = () => {

  const { state, actions } = useContext(StoreContext);
  let youtubePlayerAnchorOne = useRef(null);
  let youtubePlayerAnchorTwo = useRef(null);

  useEffect(() => {
    loadYoutube();
  }, []);

  const loadYoutube = () => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      window.onYouTubeIframeAPIReady = loadVideos;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    // else{
    //   loadVideos()
    // }
  }

  const loadVideos = async () => {
    const video1 = {
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
    }
    const video2 = {
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
    }
    try {
      player = await new window.YT.Player(youtubePlayerAnchorOne, video1);
      playerTwo = await new window.YT.Player(youtubePlayerAnchorTwo, video2);
      Promise.all([player, playerTwo]).then(()=>{
          actions.pannel.loadVideosEnd()
      });
      
    } catch (error) {
      console.log(error)
    }
  }

  const onReadyYoutube = event => {
    event.target.setVolume(50);
  };

  const setSound = sound => {
    const { mix } = state,
      selected = mix.selected;
    selected === 0
      ? player.loadVideoById(sound, 0, CONSTANTS.QUALITY)
      : playerTwo.loadVideoById(sound, 0, CONSTANTS.QUALITY);
    actions.search.toggleSearch();
  };

  const content = () => {
    const { pannel } = state;
    return (
      <React.Fragment>
      <IsFetching fetching={pannel.isFetching} showChildren={true}/>
        <main className="pannel">
          <section className="mix">
            <Video player={player} videoNumber={0} reference={r => { youtubePlayerAnchorOne = r; }} />
            <Video player={playerTwo} videoNumber={1} reference={r => { youtubePlayerAnchorTwo = r; }} />
            <MixFader playerOne={player} playerTwo={playerTwo} />
            <PannelSearch setSound={setSound} />
          </section>
        </main>
      </React.Fragment>
    );
  };
  return content();
}
export default Pannel;
