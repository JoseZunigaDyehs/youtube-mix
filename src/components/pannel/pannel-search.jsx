import React, { useRef, useMemo, useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/store/storeContext";
import PropTypes from "prop-types";
import YTSearch from "youtube-api-search";
import { CONSTANTS } from "../../utilities/utilities";

const PannelSearch = ({ player, mixId }) => {
  const [videos, setVideos] = useState([])
  const { state, actions } = useContext(StoreContext);
  const input = useRef(null);

  useEffect(() => {
    // debugger
    const { mixById } = state.vj
    const mix = mixById[mixId]
    const videos = mix.searchs
    setVideos(videos)
  }, [videos])

  const clickHandle = video => {
    debugger
    const { id } = video
    player.loadVideoById(id, 0, CONSTANTS.QUALITY)
  };
  const handledSubmit = (e) => {
    e.preventDefault();
    debugger
    const value = input.current.value;
    YTSearch({ key: "AIzaSyDXHdaBBkea1HeDMBlcpu5f0VWVRHg_8Ls", value }, data => {
      actions.vj.searchYT(mixId, data);
    });
  };
  const listSearch = () => {
    const vid = state.vj.mixById[mixId].searchs.map((map, i) => {
      return (
        <span
          key={map.id.videoId}
          onClick={() => {
            clickHandle(map);
          }}
        >
          {map.snippet.title}
        </span>
      );
    });

    return <div className="list">{vid}</div>;
  };
  const content = () => {
    const { mixById } = state.vj
    const mix = mixById[mixId]
    const videos = mix.searchs
    return useMemo(
      () => (
        <section className={`pannel-search active`}>
          <form
            onSubmit={(e) => {
              handledSubmit(e);
            }}
          >
            <input className="find" type="text" ref={input} />
          </form>
          {listSearch()}
        </section>
      ),
      [videos]
    );
  };

  return content();
}

export default PannelSearch;

PannelSearch.propTypes = {
  setSound: PropTypes.func.isRequired
};
