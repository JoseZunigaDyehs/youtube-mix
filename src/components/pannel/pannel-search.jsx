import React, { useState, useRef, useMemo, useContext } from "react";
import { StoreContext } from "../../context/store/storeContext";
import PropTypes from "prop-types";
import YTSearch from "youtube-api-search";

const PannelSearch = (props) => {
  const { state, actions } = useContext(StoreContext);
  const input = useRef(null);

  const youtubeSearch = term => {
    YTSearch({ key: "AIzaSyDXHdaBBkea1HeDMBlcpu5f0VWVRHg_8Ls", term }, data => {
      actions.search.setVideos(data);
    });
  };
  const clickHandle = video => {
    const {setSound} = props,
      { id } = video;
    setSound(id.videoId);
  };
  const handledSubmit = (e) => {
    e.preventDefault();
    const value = input.current.value;
    youtubeSearch(value);
  };
  const listSearch = () => {
    // debugger
    const vid = state.search.videos.map((map, i) => {
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

    return <div className="list">{ vid }</div>;
  };
  const content = () => {
    const { setSound } = props,
      { search } = state,
      isActive = search.isActive;
    return useMemo(
      () => (
        <section className={`pannel-search ${isActive ? "active" : ""}`}>
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
      [setSound, search, search.videos]
    );
  };

  return content();
}

export default PannelSearch;

PannelSearch.propTypes = {
  setSound: PropTypes.func.isRequired
};
