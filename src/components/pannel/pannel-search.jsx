import React, { useState, useRef } from "react";
import YTSearch from "youtube-api-search"

function PannelSearch(props) {
  const [videos,setVideos] = useState([]);
  const input = useRef(null);
  function youtubeSearch(term){
    YTSearch({key:"AIzaSyDXHdaBBkea1HeDMBlcpu5f0VWVRHg_8Ls",term},(data)=>{
        setVideos({videos:data})
    })
  }
  function clickHandle(video) {
    const {id} = video;
    props.setSound(id.videoId);
  }
  function changeHandle(){
      const value = input.current.value;
      youtubeSearch(value);
  }
  function listSearch() {
    const vid = videos.map((map,i)=>{
        return <span key={map.id.videoId} onClick={()=>{clickHandle(map)}}>{map.snippet.title}</span>
    })

    return <div className="list">{vid}</div>
  }
  function content() {
      const { searchStates } = props,
        isActive = searchStates.get("isActive");
    return (
      <section className={`pannel-search ${isActive?'active':''}`}>
        <input className="find" type="text" ref={input} onChange={()=>{changeHandle()}}/>
        {listSearch()}
      </section>
    );
  };

  return content();
}

export default PannelSearch;
