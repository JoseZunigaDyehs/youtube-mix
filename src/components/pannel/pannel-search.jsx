import React, { useRef, useMemo, useContext } from "react";
import { StoreContext } from "../../context/store/storeContext";
import PropTypes from "prop-types";
import YTSearch from "youtube-api-search";
import { CONSTANTS } from "../../utilities/utilities";

const PannelSearch = ({ player, mixId }) => {
  const { state, actions } = useContext(StoreContext);
  const input = useRef(null);

  const clickHandle = video => {
    const { id } = video
    player.loadVideoById(id, 0, CONSTANTS.QUALITY)
    actions.search.toggleSearch(mixId)
  };
  const handledSubmit = (e) => {
    e.preventDefault();
    const value = input.current.value;
    YTSearch({ key: "AIzaSyDXHdaBBkea1HeDMBlcpu5f0VWVRHg_8Ls", value }, data => {
      actions.search.setVideos(mixId,data);
    });
  };
  const listSearch = () => {
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
  
    return <div className="list">{vid}</div>;
        };
  const content = () => {
    const {search} = state;
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
          [ search, search.videos]
        );
      };
    
      return content();
    }
    
    export default PannelSearch;
    
PannelSearch.propTypes = {
            setSound: PropTypes.func.isRequired
        };
