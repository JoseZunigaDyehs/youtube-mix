import React, { useContext, useRef } from 'react'
import { StoreContext } from "../../context/store/storeContext"
import InputColor, { Color } from 'react-input-color';
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
    if (_file) {
      actions.pannel.fetching(true)
      const reader = new FileReader();
      reader.onload = function () {
        try {
          const obj = JSON.parse(reader.result)
          actions.vj.updateVj(obj)
          actions.pannel.setNotification(true, 'Archivo cargado correctamente', 'success')
          actions.pannel.fetching(false)

        } catch (error) {
          actions.pannel.setNotification(true, 'Archivo no válido', 'error')
          actions.pannel.fetching(false)
        }
      }
      reader.onerror = () => {
        actions.pannel.setNotification(true, 'Archivo no válido', 'error')
        actions.pannel.fetching(false)
      }
      reader.readAsText(_file);
    }
  }
  const setColor = () => {

  }
  const color = () => {
    return (
      <div>
        <InputColor
          initialHexColor="#5e72e4"
          onChange={setColor}
          placement="right"
        />
        <div
          style={{
            width: 50,
            height: 50,
            marginTop: 20,
            backgroundColor: state.vj.color
          }}
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
          <a style={{ marginRight: "1rem" }} ref={link} className="button" download={`set-config-yt-${date.getDate()}.txt`} href={""} onClick={(e) => { clickHandle(e) }} >Download</a> -
          <a style={{ marginLeft: "1rem" }} className="button" onClick={() => { file.current.click() }} >Upload</a>
          <input style={{ display: 'none' }} ref={file} type="file" name="set-config" onChange={() => { onChangeHandle() }} />
          {/* {color()} */}
        </div>
      </div>
    )
  }
  return content()
}

export default MainControl