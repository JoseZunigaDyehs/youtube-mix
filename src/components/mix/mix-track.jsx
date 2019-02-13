import React, { Component } from 'react';

class MixTrack extends Component{

    setSelected = () => {
        const {trackNumber} = this.props;
        this.props.setSelected(trackNumber);
    }

    content = () => {
        const { trackStates, trackNumber } = this.props,
            selected = trackStates.get("selected"),
            trackState = trackNumber===0?trackStates.get("firstTrack"):trackStates.get("secondTrack"),
            fileName = trackState.get("fileName");
            // file = trackState.get("file");
        let classSelected = selected===trackNumber?" selected": "";
        return <div className={`mixtrack${classSelected}`} onClick={()=>{this.setSelected()}}> {trackNumber+"  #"}{fileName}</div>
    }
    render = () => {
        return this.content();
    }
}


export default MixTrack;
