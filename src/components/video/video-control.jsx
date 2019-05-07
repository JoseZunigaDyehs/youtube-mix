import React, { useContext } from 'react';
import { StoreContext } from "../../context/store/storeContext";
import playIcon from "../../assets/svg/001-play.svg";
import pauseIcon from "../../assets/svg/002-music-player-pause-lines.svg";
import stopIcon from "../../assets/svg/003-video-player-stop-button.svg";
import searchIcon from "../../assets/svg/012-musica-searcher.svg";
import Button from '../modules/button';

const VideoControl = ({ player }) => {
    const { state, actions } = useContext(StoreContext);
    const toggleSearch = () => {
        actions.search.toggleSearch();
        const find = document.documentElement.getElementsByClassName("find")[0];
        find.focus();
    }
    const fillButtons = () => {
        const buttons = [
            {
                type: "CURRENT",
                name: "PLAY",
                icon: playIcon,
                function: () => {
                    player.playVideo()
                }
            },
            {
                type: "CURRENT",
                name: "PAUSE",
                icon: pauseIcon,
                function: () => {
                    player.pauseVideo()
                }
            },
            {
                type: "CURRENT",
                name: "STOP",
                icon: stopIcon,
                function: () => {
                    player.stopVideo()
                }
            },
            {
                type: "LOAD",
                name: "LOAD",
                icon: searchIcon,
                function: () => {
                    toggleSearch();
                }
            }
        ];

        return buttons.map((button, i) => {
            return (
                <div key={i} className={button.name.toLowerCase() + " button"}>
                    <Button
                        func={button.function} 
                        name={button.name}
                        icon={button.icon}
                        />
                </div>
            );
        });
    };
    return <div className="buttons">{fillButtons()}</div>
}

export default VideoControl;