import React, {useState,useEffect} from 'react'

export const VideoDuration = ({mixId,player,advanceVideo, duration}) => {
    const [ advance, setAdvance ] = useState(0);
    useEffect(()=>{
        debugger
        const realAdvance = (duration / 100) * advance
        setAdvance(realAdvance);
        getSeconds();
    },advanceVideo,advance)

    const getSeconds = () => {
        // setInterval(() => {
            setAdvance(advance + 1)
        // }, 1000);
    }

    return (
        <div className="duration" style={{width:advance+'%'}}>
            <div className="advance"></div>
        </div>
    )
}
