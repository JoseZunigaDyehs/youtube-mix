import React, { useContext, useRef, useState, useEffect } from "react"
import { StoreContext } from "../../context/store/storeContext"
import InputColor, { Color } from "react-input-color"
import Button from "../modules/button"
import { blob } from "../../utilities/utilities"

const MainControl = () => {
	const link = useRef(null)
	const file = useRef(null)
	const { state, actions } = useContext(StoreContext)
	const [color, setColor] = useState(state.vj.colorVJ)

	useEffect(() => {
		let root = document.documentElement
		root.style.setProperty("--color-primary", color.hex)
		root.style.setProperty("--color-primary-light", shadeColor(color.hex, 50))
		root.style.setProperty(
			"--color-primary-extra-light",
			shadeColor(color.hex, 100)
		)
		root.style.setProperty("--color-primary-dark", shadeColor(color.hex, -50))
		root.style.setProperty("--rgba-primary", hexToRgbA(color.hex))
		if (state.vj.colorVJ.hex !== color.hex) {
			actions.vj.updateColor(color)
		}
	}, [color])
	const shadeColor = (color, percent) => {
		var R = parseInt(color.substring(1, 3), 16)
		var G = parseInt(color.substring(3, 5), 16)
		var B = parseInt(color.substring(5, 7), 16)

		R = parseInt((R * (100 + percent)) / 100)
		G = parseInt((G * (100 + percent)) / 100)
		B = parseInt((B * (100 + percent)) / 100)

		R = R < 255 ? R : 255
		G = G < 255 ? G : 255
		B = B < 255 ? B : 255

		var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16)
		var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16)
		var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16)

		return "#" + RR + GG + BB
	}
	const hexToRgbA = hex => {
		var c
		if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
			c = hex.substring(1).split("")
			if (c.length == 3) {
				c = [c[0], c[0], c[1], c[1], c[2], c[2]]
			}
			c = "0x" + c.join("")
			return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",")
		}
		throw new Error("Bad Hex")
	}

	const clickHandle = async e => {
		const URL = await blob(state.vj)
		link.current.href = URL
	}
	const onChangeHandle = e => {
		const _file = file.current.files[0]
		if (_file) {
			actions.pannel.fetching(true)
			const reader = new FileReader()
			reader.onload = function() {
				try {
					const obj = JSON.parse(reader.result)
					actions.vj.updateVj(obj)
					actions.pannel.setNotification(
						true,
						"Archivo cargado correctamente",
						"success"
					)
					actions.pannel.fetching(false)
				} catch (error) {
					actions.pannel.setNotification(true, "Archivo no válido", "error")
					actions.pannel.fetching(false)
				}
			}
			reader.onerror = () => {
				actions.pannel.setNotification(true, "Archivo no válido", "error")
				actions.pannel.fetching(false)
			}
			reader.readAsText(_file)
		}
	}
	const reset = () => {
		window.localStorage.removeItem("ytMix")
		window.location.href = "/"
	}
	const fillColor = () => {
		return (
			<div style={styles.buttonColor}>
				<InputColor
					initialHexColor={state.vj.colorVJ.hex}
					onChange={setColor}
					placement="top"
				/>
			</div>
		)
	}
	const content = () => {
		const date = new Date()
		return (
			<div className="main-control">
				<h4>SET CONFIG:</h4>
				<div className="buttons">
					<a
						ref={link}
						className="button"
						download={`set-config-yt-${date.getDate()}.txt`}
						href={""}
						onClick={e => {
							clickHandle(e)
						}}
					>
						Download
					</a>
					<a
						className="button"
						style={styles.button}
						onClick={() => {
							file.current.click()
						}}
					>
						Upload
					</a>
					<input
						style={{ display: "none" }}
						ref={file}
						type="file"
						name="set-config"
						onChange={() => {
							onChangeHandle()
						}}
					/>
					<a
						style={styles.button}
						ref={link}
						className="button"
						href={""}
						onClick={e => {
							reset(e)
						}}
					>
						Reset
					</a>
					{fillColor()}
				</div>
			</div>
		)
	}
	return content()
}
const styles = {
	button: {
		marginLeft: "1rem"
	},
	buttonColor: {
		marginLeft: "1rem",
		paddingTop: "3px"
	}
}
export default MainControl
