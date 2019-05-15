import React, { useMemo, useRef, useState } from "react"

//TODO: CORREGIR FADER

function MixFader({ playerOne, playerTwo }) {

	const [positionFader, setPositionFader ] =useState((400 / 2 + 2) - 10)
	const [total, setTotal] = useState(400)
	const [fader, setFader] = useState(false)
	const faderDiv = useRef(null)

	const toggleOver = () => {
		setFader(!fader)
	}

	const setFaderMix = position => {
		const porcSecondTrack = (position -10 * 100) / total,
			porcFirstTrack = 100 - porcSecondTrack
		playerOne.setVolume(porcFirstTrack)
		playerTwo.setVolume(porcSecondTrack)
	}

	const onPointerHandle = (e) => {
		if (!fader) {
			return
		} else {
			//Se compara con el right del div fader
			const faderDivStartPosition = window.outerWidth / 2 - 200,
				faderDivEndPosition = faderDivStartPosition + total,
				faderDivMiddlePosition = faderDivEndPosition / 20
			let left = e.screenX
			if(left - 10 <= faderDivStartPosition){
				left = 0
			}else if(left >= faderDivEndPosition - 10 ){
				left = total - 20
			}else{
				left = left - faderDivStartPosition
			}
			setPositionFader(left)
			setFaderMix(left)
		}
	}

	const content = () => {
		const style = {
			left: positionFader
		}

		if (fader) {
			style.cursor = "col-resize"
		} else {
			style.cursor = "pointer"
		}

		return useMemo(() => <div
			className={fader ? "mixfader over" : "mixfader"}
			onPointerMove={(e) => {
				onPointerHandle(e)
			}}
      
		>
			<div ref={faderDiv} className="fader" style={style} onClick={() => {
				toggleOver()
			}}></div>
		</div>, [fader, positionFader, total])
	}

	return content()

}

export default MixFader