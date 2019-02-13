import React, { Component } from "react";

class IframeLoad extends Component {

    iframe = () => {
        return{
            __html: '<iframe id="myIframe" src="https://www.download-mp3-youtube.com/api/?api_key=MjkzOTcyNDA0&format=mp3&video_id=8wH03OHveuo" className="hide"/>'
        }
    }

    clickhandle = () => {
        debugger
    }

  content = () => {
    return (
        
        <div onClick={()=>{this.clickhandle()}}  >
        <a href='https://www.convertmp3.io/download/get/?i=AciHff78ZN1R9MBrcuVSKb4QAJNKO4tS&e=49&v=IWyG4zPvjqg&progressType=button&color=3880f3'>HOla</a>
        </div>
    );
  };
  render = () => {
    return this.content();
  };
}

export default IframeLoad;
