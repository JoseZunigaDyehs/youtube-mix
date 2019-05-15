import axios from 'axios';

const API_KEY = 'AIzaSyDXHdaBBkea1HeDMBlcpu5f0VWVRHg_8Ls'

export const searchYTAPI = async ( search ) => {

    try {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&forDeveloper=true&key=${API_KEY}&maxResults=15&q=${search}`);
        return res.data.items;
    }
    catch (err) {
        return err;
    }
}

