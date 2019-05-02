import React, { useContext } from 'react';
import { StoreContext } from "../../context/store/storeContext";

const VideoButtons = (props) => {
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
                icon: "",
                function: () => {
                    props.actionButtonBySelected('playVideo')
                }
            },
            {
                type: "CURRENT",
                name: "PAUSE",
                icon: "",
                function: () => {
                    props.actionButtonBySelected('pauseVideo')
                }
            },
            {
                type: "CURRENT",
                name: "STOP",
                icon: "",
                function: () => {
                    props.actionButtonBySelected('stopVideo')
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
        ];

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
    return <div className="buttons">{fillButtons()}</div>
}

export default VideoButtons;