import React, { useContext } from "react";
import {StoreContext} from "../../context/store/storeContext"

const VideoMenu = ({videoNumber}) => {
    const { state, actions } = useContext(StoreContext);

    // TO DO: PONER TODO LO DE UN MENU
    const fillMenu = () => {
        if(videoNumber===0){
            return(
                <button></button>
            )
        }else{

        }
    }

    const content = ( ) => {
        return fillMenus();
    }

    return content();
    // MENU
    // LISTA MENU
    // 
    

}

export default VideoMenu;