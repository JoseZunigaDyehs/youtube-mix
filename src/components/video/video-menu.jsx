import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/store/storeContext"
import PannelSearch from "../pannel/pannel-search";


const VideoMenu = ({ player, mixId }) => {
    const { state, actions } = useContext(StoreContext);
    const [open, setOpen] = useState(true);
    const [choice, setChoice] = useState('');

    const toggleOpen = () => {
        setOpen(!open)
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
                <div className="menu">
                    <nav>
                        <ul>
                            <li onClick={()=>{ setChoice('search') }}>
                                Search
                            </li>
                            <li onClick={()=>{ setChoice('lists') }}>
                                Lists
                            </li>
                        </ul>
                    </nav>
                    {content}
                    <button onClick={()=>{ toggleOpen() }} >CLOSE</button>
                </div>
            )
        } else {
            return <button onClick={()=>{ toggleOpen() }} >OPEN</button>
        }
    }

    return content();
    // MENU
    // LISTA MENU
    // 


}

export default VideoMenu;