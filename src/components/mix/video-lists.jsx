import React, { useContext, useState } from "react"
import { StoreContext } from "../../context/store/storeContext"
import Button from "../modules/button"
import playIcon from "../../assets/svg/001-play.svg"
import addIcon from "../../assets/svg/014-add-song.svg"
import cancelIcon from "../../assets/svg/013-canceL.svg"
import { CONSTANTS } from "../../utilities/utilities"

const VideoLists = ({player}) => {
	const [ idList, setIdList ] = useState(0)
	const { state, actions } = useContext(StoreContext)

	const clickHandleList = (id) => {
		setIdList(idList!==null?null:id)
	}
  
	const clickHandleLoad = (idVideo) => {
		player.loadVideoById(idVideo, 5, "large")
		player.stopVideo()
	}
  
	const clickHandlePlay = video => {
		const { id } = video
		player.loadVideoById(id, 0, CONSTANTS.QUALITY)
	}

	const content = () => {
		const { vj: { lists, listsById } } = state
		if(idList!==null){
			const list = listsById[idList]
			const { name, videos } = list
			const videoList = videos.map(video => {
				const { id: { videoId } } = video
			  const { snippet: { title, thumbnails: { default: { url } } } } = video
				return (
					<div className="video" key={videoId}>
						<img src={url} alt="" srcset=""/>
						<p>{title}</p>
						<div className="buttons">
							<Button
								func={() => {
									clickHandlePlay(video)
								}}
								name={""}
								icon={playIcon}
							/>
							<Button
								func={() => {
									clickHandleLoad(videoId)
								}}
								name={""}
								icon={addIcon}
							/>
							<Button
								func={() => {
									actions.vj.removeVideoList(idList,videoId)
								}}
								name={""}
								icon={cancelIcon}
							/>
						</div>
					</div>
				)
			})
			debugger
			const style = videos.length > 12 ? {
				overflowY: "scroll"
			} : {}
      
			return (
				<React.Fragment>
					<h3>{name}</h3>
					<div className="list" style={style}>{videoList}</div>
				</React.Fragment>
			)
		}else{
		  return lists.map(listId => {
				const list = listsById[listId]
				const { name, id } = list
				return (
					<div className="list"><p key={id} onClick={()=>{ clickHandleList(id) }}>{name}</p></div>
				)
			})
		}
	}

	return (
		<section className={`pannel-search active ${idList===null?"lists":"open"}`}>
			{content()}
		</section>
	)

}

export default VideoLists