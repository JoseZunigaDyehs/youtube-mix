import React from "react"
import Button from "../modules/button"
import playIcon from "../../assets/svg/001-play.svg"
import addIcon from "../../assets/svg/014-add-song.svg"

const VideoList = ({list}) => {

	const content = () => {
		const _listVideos = list.map(video => {
			const { id: { videoId } } = video
			const { snippet: { title, thumbnails: { default: { url } } } } = video
			return (
				<div className="video">
					<img src={url} alt="" srcset=""/>
					<p>{title}</p>
					<div className="buttons">
						<Button
							func={null}
							name={""}
							icon={playIcon}
						/>
						<Button
							func={null}
							name={""}
							icon={addIcon}
						/>
					</div>
				</div>
			)
		})
		return <div className="list">{_listVideos}</div>
	}

	return content()

}

export default VideoList