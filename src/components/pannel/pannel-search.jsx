import React, { Component } from "react";
import YTSearch from "youtube-api-search"
import Mix from "../mix/mix";

class PannelSearch extends Component {
    state = {
        videos: []
    }
  input = React.createRef();
  youtubeSearch = (term) => {
    YTSearch({key:"AIzaSyDXHdaBBkea1HeDMBlcpu5f0VWVRHg_8Ls",term},(data)=>{
        // debugger
        this.setState({videos:data})
    })
  }
  clickHandle = (video) => {
    const {id} = video;
    this.props.setSound(id.videoId);
  }
  changeHandle = () => {
      const value = this.input.current.value;
      this.youtubeSearch(value);
  }
  listSearch = () => {
      const { videos } = this.state;
    // debugger
    const vid = videos.map((map,i)=>{
        return <span key={map.id.videoId} onClick={()=>{this.clickHandle(map)}}>{map.snippet.title}</span>
    })

    return <div className="list">{vid}</div>
  }
  content = () => {
      const { searchStates } = this.props,
        isActive = searchStates.get("isActive");
    return (
      <div className={`pannel-search ${isActive?'active':''}`}>
        <input className="find" type="text" ref={this.input} onChange={()=>{this.changeHandle()}}/>
        {this.listSearch()}
      </div>
    );
  };

  render = () => {
    return this.content();
  };
}

export default PannelSearch;
