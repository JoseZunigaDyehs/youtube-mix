import React, { useContext, useRef } from 'react'
import { StoreContext } from "../../context/store/storeContext"
import Button from '../modules/button';
import { blob } from '../../utilities/utilities'

const MainControl = () => {
  const link = useRef(null)
  const file = useRef(null)
  const { state, actions } = useContext(StoreContext)
  const clickHandle = async (e) => {
    const URL = await blob(state.vj)
    link.current.href = URL
  }
  const onChangeHandle = (e) => {
    const _file = file.current.files[0]
    const reader  = new FileReader();
    reader.onload = function () {
      actions.vj.updateVj(JSON.parse(reader.result))
    }
    reader.readAsText(_file);
  }
  const content = () => {
    const date = new Date()
    return (
      <div className="main-control">
        <h4>SET CONFIG</h4>
        <a ref={link} className="button" download={`set-config-yt-${date.getDate()}.txt`} href={""} onClick={(e)=>{clickHandle(e)}} >Download</a>
        <input ref={file} type="file" name="set-config" onChange={()=>{ onChangeHandle() }}/>
      </div>
    )
  }
  return content()
}

export default MainControl