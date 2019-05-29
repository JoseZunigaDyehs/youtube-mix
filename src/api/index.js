import axios from "axios"

const API_KEY = "AIzaSyDXHdaBBkea1HeDMBlcpu5f0VWVRHg_8Ls"

export const searchYTAPI = async search => {
	try {
		const res = await axios.get(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&type=video&maxResults=36&q=${search}`
		)

		debugger
		return res.data.items
	} catch (err) {
		debugger
		return err
	}
}
