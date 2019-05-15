import React, { useMemo, useContext, useRef } from "react"
import { StoreContext } from "../../context/store/storeContext"

function MixFader({ playerOne, playerTwo }) {
	const { state, actions } = useContext(StoreContext)
	const faderDiv = useRef(null)

	const toggleOver = () => {
		const { mix } = state
		actions.mix.toggleFader(!mix.fader)
	}

	const setFaderMix = position => {
		const { total } = state.mix,
			porcSecondTrack = (position * 100) / total,
			porcFirstTrack = 100 - porcSecondTrack
		playerOne.setVolume(porcFirstTrack)
		playerTwo.setVolume(porcSecondTrack)
	}

	const onPointerHandle = (e) => {
		const { mix } = state
		console.log(e.screenX)
		if (!mix.fader) {
			return
		} else {
			//Se compara con el right del div fader
			const faderDivStartPosition = window.outerWidth / 2 - 200,
				faderDivEndPosition = faderDivStartPosition + 400
			let left = e.screenX
			if(left<faderDivStartPosition){
				left = 10
			}else if(left > faderDivEndPosition){
				left = mix.total - 10
			}else{
				left = left - faderDivStartPosition
			}
			actions.mix.setPositionFaderMix(left)
			setFaderMix(left)
		}
	}

	const content = () => {
		const { mix } = state,
			style = {
				left: mix.positionFader - 10
			}

		if (mix.fader) {
			style.cursor = "col-resize"
		} else {
			style.cursor = "pointer"
		}

		return useMemo(() => <div
			className={mix.fader ? "mixfader over" : "mixfader"}
			onPointerMove={(e) => {
				onPointerHandle(e)
			}}
      
		>
			<div ref={faderDiv} className="fader" style={style} onClick={() => {
				toggleOver()
			}}></div>
		</div>, [mix])
	}

	return content()

}

export default MixFader