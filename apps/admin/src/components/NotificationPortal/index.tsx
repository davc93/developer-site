import "./style.css"
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { NotificationContext } from '@/context/NotificationContext';
import {Notification} from "ui-react"

function NotificationPortal() {
  const { notifications,setNotifications } = useContext(NotificationContext)
  const handleCloseNotification = (id?:string) => () => {
    setNotifications(notifications.filter(notification=> notification.id !== id))
  }
  return ReactDOM.createPortal(
    <>
      {notifications.map((notification, i) => (
        <Notification key={i} {...notification} onClose={handleCloseNotification} />
      ))}
    </>,
    document.querySelector('.notification-container') as Element
  );
}

export default NotificationPortal;