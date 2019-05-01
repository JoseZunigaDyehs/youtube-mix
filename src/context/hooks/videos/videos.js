import React, { useEffect, useState } from "react";

let player;

export const Videos = ({ children }) => {
    const [ isReady, setIsReady ] = useState(false);
  useEffect(() => {
    didMount();
  },[]);


  const didMount = async ()  => {
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

  const loadVideos = async () => {
    // the Player object is created uniquely based on the id in props
    player = await new window.YT.Player(`video`, {
      videoId: "M7lc1UVf-VE",
      events: {
        onReady: onPlayerReady,
        onError: catchError
      },
    });
    return player;
  }

  function catchError(event){
    if(event.data == 100) console.log("De video bestaat niet meer");
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  return (
    <div>
        <div id="video"/>
    </div>
  );
};
