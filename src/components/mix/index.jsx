import React, { useContext, useEffect, useRef } from "react";
import { StoreContext } from "../../context/store/storeContext";

import IsFetching from '../modules/isFetching';

import MixFader from "./mix-fader";
import Video from "./video";

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

export const Mix = () => {

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
      playerVars: {
        controls: 0,
        rel: 0,
      },
      controls: 0,
      showInfo:0,
      events: {
        onReady: onReadyYoutube
      }
    }
    const video2 = {
      videoId: "zzkf4x1grXY",
      playerVars: {
        controls: 0,
      },
      showInfo:0,
      events: {
        onReady: onReadyYoutube
      }
    }
    try {
      player = await new window.YT.Player(youtubePlayerAnchorOne, video1);
      playerTwo = await new window.YT.Player(youtubePlayerAnchorTwo, video2);
      Promise.all([player, playerTwo]).then(() => {
        actions.pannel.loadVideosEnd()
      });

    } catch (error) {
      console.log(error)
    }
  }

  const onReadyYoutube = event => {
    event.target.setVolume(50);
    event.target.hideVideoInfo();
    //SETEAR DURATION
    debugger
  };


  const content = () => {
    const { pannel } = state;
    return (
      <React.Fragment>
        <IsFetching fetching={pannel.isFetching} showChildren={true} />
        <main className="mix">
          <section className="mix-content">
            <Video player={player} mixId={0} reference={r => { youtubePlayerAnchorOne = r; }} />
            <Video player={playerTwo} mixId={1} reference={r => { youtubePlayerAnchorTwo = r; }} />
            <MixFader playerOne={player} playerTwo={playerTwo} />
          </section>
        </main>
      </React.Fragment>
    );
  };
  return content();
}
