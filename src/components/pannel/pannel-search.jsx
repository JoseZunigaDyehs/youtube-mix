import React, { useState, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import YTSearch from "youtube-api-search";

function PannelSearch(props) {
  const [videos, setVideos] = useState([]);
  const input = useRef(null);
  const youtubeSearch = term => {
    YTSearch({ key: "AIzaSyDXHdaBBkea1HeDMBlcpu5f0VWVRHg_8Ls", term }, data => {
      setVideos(data);
    });
  };
  const clickHandle = video => {
    const { id } = video;
    props.setSound(id.videoId);
  };
  const handledSubmit = (e) => {
    e.preventDefault();
    const value = input.current.value;
    youtubeSearch(value);
  };
  const listSearch = () => {
    const vid = videos.map((map, i) => {
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

    return <div className="list">{ vid}</div>;
  };
  const content = () => {
    const { searchStates, setSound } = props,
      isActive = searchStates.get("isActive");
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
      [setSound, searchStates, videos]
    );
  };

  return content();
}

export default PannelSearch;

PannelSearch.propTypes = {
  setSound: PropTypes.func.isRequired,
  searchStates: PropTypes.any.isRequired
};
