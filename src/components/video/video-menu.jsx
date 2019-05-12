import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/store/storeContext"
import PannelSearch from "../pannel/pannel-search";
import Button from "../modules/button";

import menuIcon from "../../assets/svg/010-lines-menu2.svg";
import menuCancel from "../../assets/svg/013-canceL.svg";


const VideoMenu = ({ player, mixId }) => {
    const { state, actions } = useContext(StoreContext);
    const [open, setOpen] = useState(true);
    const [choice, setChoice] = useState('search');

    const toggleOpen = () => {
        setOpen(!open)
        if(choice!=='') setChoice('')
    }

    const content = () => {
        if (open) {
            let content = [];
            switch (choice) {
                case 'search':
                    content.push(
                        <PannelSearch mixId={mixId} player={player}></PannelSearch>
                    )
                    break;
                case 'lists':
                    content.push(
                        <div>Lists</div>
                    )
                    break;

                default:
                    break;
            }
            return (
                <div className="menu open">
                    <nav>
                        <ul>
                            <li onClick={() => { setChoice('search') }} className={choice==='search'?'active':''}>
                                Search
                            </li>
                            <li onClick={() => { setChoice('lists') }} className={choice==='lists'?'active':''}>
                                Lists
                            </li>
                        </ul>
                    </nav>
                    {content}
                    <Button icon={menuCancel} func={ toggleOpen }></Button>
                </div>
            )
        } else {
            return (
                <div className="menu">
                    {/* <nav></nav> */}
                    <Button icon={menuIcon} func={ toggleOpen }></Button>
                </div>
            )
        }
    }

    return content();
    // MENU
    // LISTA MENU
    // 


}

export default VideoMenu;