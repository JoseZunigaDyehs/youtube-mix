import React, { useRef, useMemo, useContext, useState, useEffect } from "react"
import { StoreContext } from "../../context/store/storeContext"
import PropTypes from "prop-types"
import { CONSTANTS } from "../../utilities/utilities"
import { searchYTAPI } from "../../api"
import VideoSearchVideo from "./video-search-video"

const VideoSearch = ({ player, mixId }) => {
	const [videos, setVideos] = useState([])
	const { state, actions } = useContext(StoreContext)
	const input = useRef(null)

	useEffect(() => {
		const { mixById } = state.vj
		const mix = mixById[mixId]
		const videos = mix.searchs
		setVideos(videos)
		input.current.focus()
	}, [videos,player, mixId])

	const clickHandle = video => {
		const { id } = video
		player.loadVideoById(id, 0, CONSTANTS.QUALITY)
	}
	const handledSubmit = async (e) => {
		e.preventDefault()
		const value = input.current.value
		const videos = await searchYTAPI(value)
		actions.vj.searchYT(mixId,videos)
	}
	const listSearch = () => {
		const vid = state.vj.mixById[mixId].searchs.map((map, i) => {
			return (
				<VideoSearchVideo key={map.id.videoId}
					img={map.snippet.thumbnails.default.url}
					title={map.snippet.title}
					onClick={() => {
						clickHandle(map)
					}}	
				></VideoSearchVideo>
			)
		})

		return <div className="list">{vid}</div>
	}
	const content = () => {
		const { mixById } = state.vj
		const mix = mixById[mixId]
		const videos = mix.searchs
		return useMemo(
			() => (
				<section className={"pannel-search active"}>
					<form
						onSubmit={(e) => {
							handledSubmit(e)
						}}
					>
						<input className="find" type="text" ref={input} />
					</form>
					{listSearch()}
				</section>
			),
			[videos]
		)
	}

	return content()
}

export default VideoSearch

VideoSearch.propTypes = {
	setSound: PropTypes.func.isRequired
}
