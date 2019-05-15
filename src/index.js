import React from "react"
import { render } from "react-dom"
import * as serviceWorker from "./serviceWorker"
import { StoreProvider } from "./context/store/storeContext"
import "./assets/css/main.scss"
import { Mix } from "./components/mix/index.jsx"

render(
	<StoreProvider>
		{/* <Videos> */}
		<Mix/>
		{/* </Videos> */}
	</StoreProvider>
	,
	document.getElementById("root")
)

serviceWorker.register()
