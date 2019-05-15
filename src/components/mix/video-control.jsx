import React, { useContext, useState } from "react"
import { StoreContext } from "../../context/store/storeContext"

import playIcon from "../../assets/svg/001-play.svg"
import pauseIcon from "../../assets/svg/002-music-player-pause-lines.svg"
import stopIcon from "../../assets/svg/003-video-player-stop-button.svg"
import nextIcon from "../../assets/svg/004-skip-track-option.svg"

import Button from "../modules/button"
import VideoMenu from "./video-menu"

const VideoControl = ({ player, mixId }) => {
	const { actions } = useContext(StoreContext)
	const toggleSearch = () => {
		actions.search.toggleSearch()
		const find = document.documentElement.getElementsByClassName("find")[0]
		find.focus()
	}
	const fillButtons = () => {
		const buttons = [
			{
				type: "CURRENT",
				name: "PLAY",
				icon: playIcon,
				function: () => {
					player.playVideo()
				}
			},
			{
				type: "CURRENT",
				name: "PAUSE",
				icon: pauseIcon,
				function: () => {
					player.pauseVideo()
				}
			},
			{
				type: "CURRENT",
				name: "STOP",
				icon: stopIcon,
				function: () => {
					player.stopVideo()
				}
			},
			{
				type: "CURRENT",
				name: "NEXT",
				icon: nextIcon,
				function: () => {
					player.nextVideo()
				}
			},
		]

		return buttons.map((button, i) => {
			return (
				<div key={i} className={button.name.toLowerCase() + " button"}>
					<Button
						func={button.function}
						name={button.name}
						icon={button.icon}
					/>
				</div>
			)
		})
	}

	const content = () => {
		const style = mixId===0?{paddingRight: 200}:{paddingLeft:200}
		return (
			<React.Fragment>
				<VideoMenu
					player={player}
					mixId={mixId}
				/>
				<div className="buttons" style={style}>{fillButtons()}</div>
			</React.Fragment>
		)
	}

	return content()
}

export default VideoControl