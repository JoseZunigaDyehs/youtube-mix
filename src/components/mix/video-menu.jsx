import React, { useContext, useState } from "react"
import { StoreContext } from "../../context/store/storeContext"
import VideoSearch from "./video-search"
import Button from "../modules/button"

import menuIcon from "../../assets/svg/010-lines-menu2.svg"
import menuCancel from "../../assets/svg/013-canceL.svg"
import VideoLists from "./video-lists"

const VideoMenu = ({ player, mixId }) => {
	const [open, setOpen] = useState(false)
	const [choice, setChoice] = useState("")

	const toggleOpen = () => {
		setOpen(!open)
		if (choice !== "") setChoice("")
	}

	const content = () => {
		if (open) {
			let content = []
			switch (choice) {
			case "search":
				content.push(<VideoSearch mixId={mixId} player={player} />)
				break
			case "lists":
				content.push(<VideoLists player={player} />)
				break

			default:
				break
			}
			return (
				<div className="menu open">
					<nav>
						<ul>
							<li
								onClick={() => {
									setChoice("search")
								}}
								className={choice === "search" ? "active" : ""}
							>
								Search
							</li>
							<li
								onClick={() => {
									setChoice("lists")
								}}
								className={choice === "lists" ? "active" : ""}
							>
								Lists
							</li>
						</ul>
					</nav>
					{content}
					<Button icon={menuCancel} func={toggleOpen} />
				</div>
			)
		} else {
			return (
				<div className="menu">
					{/* <nav></nav> */}
					<Button icon={menuIcon} func={toggleOpen} />
				</div>
			)
		}
	}

	return content()
	// MENU
	// LISTA MENU
	//
}

export default VideoMenu
