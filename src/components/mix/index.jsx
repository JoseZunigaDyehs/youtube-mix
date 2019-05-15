import React, { useContext, useEffect, useRef, useState } from "react"
import { StoreContext } from "../../context/store/storeContext"

import IsFetching from "../modules/isFetching"

import MixFader from "./mix-fader"
import Video from "./video"

let player, playerTwo

/**
 * Tiene los botones 
 * Tiene las acciones de los botones
 * renderiza ambos videos y este componente debe tener todas las acciones
 */

/**
 * Crea Iframes from youtube API
 * Usa ref para la referencia de ambos iframes
 * 
 * TODO: Pasar todas las funcionalidades a los controles
 */

export const Mix = () => {

	const [ myPlayer, setMyPlayer ] = useState({
		duration: 0,
		player: undefined,
		start: 0,
	})
	const [ myPlayerTwo, setMyPlayerTwo ] = useState({
		duration: 0,
		player: undefined,
		start: 0,
	})
	const { state, actions } = useContext(StoreContext)
	let youtubePlayerAnchorOne = useRef(null)
	let youtubePlayerAnchorTwo = useRef(null)

	useEffect(() => {
		loadYoutube()
	}, [])

	const loadYoutube = () => {
		if (!window.YT) {
			const tag = document.createElement("script")
			tag.src = "https://www.youtube.com/iframe_api"
			window.onYouTubeIframeAPIReady = loadVideos
			const firstScriptTag = document.getElementsByTagName("script")[0]
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
		}
		// else{
		//   loadVideos()
		// }
	}

	const loadVideos = async () => {
		const video1 = {
			videoId: "LxtppUZthug",
			playerVars: {
				controls: 0,
				rel: 0,
			},
			controls: 0,
			showInfo:0,
			events: {
				onReady: onReadyYoutube,
				onStateChange: onChangeYoutube
			}
		}
		const video2 = {
			videoId: "1gG1gqE05Gk",
			playerVars: {
				controls: 0,
			},
			showInfo:0,
			events: {
				onReady: onReadyYoutube
			}
		}
		try {
			player = await new window.YT.Player(youtubePlayerAnchorOne, video1)
			playerTwo = await new window.YT.Player(youtubePlayerAnchorTwo, video2)
			Promise.all([player, playerTwo]).then(() => {
				actions.pannel.loadVideosEnd()
			})

		} catch (error) {
			console.log(error)
		}
	}

	const onReadyYoutube = event => {
		event.target.setVolume(50)
		//SETEAR DURATION
		const duration = event.target.getDuration()
		if(event.target.m==="player"){
			const _player = myPlayer
			_player.duration = duration
			_player.player = event.target
			setMyPlayer(_player)
		}else{
			const _player = myPlayerTwo
			_player.duration = duration
			_player.player = event.target
			setMyPlayerTwo(_player)
		}
	}

	const onChangeYoutube = event => {
		if(event.target.m==="player"){
			const _player = myPlayer
			_player.advance = event.target.getCurrentTime()
			setMyPlayer(_player)
		}else{
			const _player = myPlayerTwo
			_player.advance = event.target.getCurrentTime()
			setMyPlayerTwo(_player)
		}
	}

	const content = () => {
		const { pannel } = state
		return (
			<React.Fragment>
				<IsFetching fetching={pannel.isFetching} showChildren={true} />
				<main className="mix">
					<section className="mix-content">
						<Video player={player} mixId={0} reference={r => { youtubePlayerAnchorOne = r }} duration={myPlayer.duration} start={myPlayer.start}/>
						<Video player={playerTwo} mixId={1} reference={r => { youtubePlayerAnchorTwo = r }} duration={myPlayerTwo.duration} start={myPlayerTwo.start}/>
						<MixFader playerOne={player} playerTwo={playerTwo} />
					</section>
				</main>
			</React.Fragment>
		)
	}
	return content()
}

//CAMBIAR TODO A PLAYER NORMAL
