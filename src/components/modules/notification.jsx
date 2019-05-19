import React, { useContext } from 'react'
import { StoreContext } from "../../context/store/storeContext"
import iconCancel from '../../assets/svg/013-canceL.svg'
import Button from "../modules/button";
const Notification = () => {
  const { state, actions } = useContext(StoreContext)

  const closeNotification = () => {
    actions.pannel.setNotification(false,'','')
  }

  const content = () => {
    const { pannel: { notification, notificationType, notificationMessage } } = state
    if( !notification ) return null
    return (
      <div className={`notification ${notification?'active': ''} ${notificationType}`}>
        <h3>{notificationType}</h3>
        <p>{notificationMessage}</p>
        <Button className="button" icon={iconCancel} func={()=>{
          closeNotification()
        }}></Button>
      </div>
    )
  }

  return content()
}

export default Notification