import React, { Component } from "react";
import IframeLoad from "./iframe";
import axios from "axios";

class ButtonLoad extends Component {
  input = React.createRef();
  componentDidMount = () => {
    // const reqData = {
    //   format: "JSON",
    //   id: "admi8wH03OHveuon123"
    // };
    // const data = Object.keys(reqData)
    //   .map(function(key) {
    //     return encodeURIComponent(key) + "=" + encodeURIComponent(reqData[key]);
    //   })
    //   .join("&");
    // const request = axios({
    //   method: "POST",
    //   withCredentials: true,
    //   crossdomain: true,
    //   data,
    //   // url: 'https://coolguruji-youtube-to-mp3-download-v1.p.mashape.com/?id=8wH03OHveuo'
    //   url: "http://api.youtube6download.top/api/"
    // });
    // return request.then(
    //   response => {
    //     debugger;
    //   },
    //   err => {
    //     debugger;
    //   }
    // );
    // https://www.convertmp3.io/download/get/?i=n3FPxVif7cwTfJPAUXYyEgmG2j8G8KpG&e=60&v=8wH03OHveuo
  };
  handleChange = () => {
    const file = this.input.current.files[0],
      { loadTrack, createSound } = this.props,
      objectURL = window.URL.createObjectURL(file),
      filename = file.name;

    loadTrack({ file: objectURL, filename });
    createSound(objectURL);
    this.input.current.value = "";
  };
  content = () => {
    const { button } = this.props;
    return (
      <div className="button">
        <input
          ref={this.input}
          type="file"
          accept=".mp3"
          className="hide"
          onChange={() => {
            this.handleChange();
          }}
        />
        <button
          onClick={() => {
            this.input.current.click();
          }}
        >
          {button.name}
        </button>
      </div>
    );
  };
  render = () => {
    return this.content();
  };
}

export default ButtonLoad;
