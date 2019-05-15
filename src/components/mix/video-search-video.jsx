import React, { useEffect, useMemo } from "react"
import Button from "../modules/button"
import playIcon from "../../assets/svg/001-play.svg"
import addIcon from "../../assets/svg/014-add-song.svg"

const VideoSearchVideo = ({title, img, onClick}) => {

	const content = () => {
		return useMemo(()=>{
			debugger
			return (
				<div className="video">
					<img src={img} alt="" srcset=""/>
					<p>{title}</p>
					<div className="buttons">
						<Button
							func={onClick}
							name={""}
							icon={playIcon}
						/>
						<Button
							func={onClick}
							name={""}
							icon={addIcon}
						/>
					</div>
				</div>
			)
		},[title, img])
	}
	return content() 

}

export default VideoSearchVideo