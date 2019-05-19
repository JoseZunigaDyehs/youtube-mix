import React, { useEffect, useMemo } from "react"
import Button from "../modules/button"
import playIcon from "../../assets/svg/001-play.svg"
import favoriteIcon from "../../assets/svg/008-loving-heart-shape.svg"

const VideoSearchVideo = ({ title, img, onClickPlay, onClickAdd, isInList }) => {

	const content = () => {
		return useMemo(() => {
			return (
				<div className="video">
					<img src={img} alt="" srcset="" />
					<p>{title}</p>
					<div className="buttons">
						<Button
							func={onClickPlay}
							name={""}
							icon={playIcon}
						/>
						{isInList ? null : <Button
							func={onClickAdd}
							name={""}
							icon={favoriteIcon}
						/>}
					</div>
				</div>
			)
		}, [title, img])
	}
	return content()

}

export default VideoSearchVideo