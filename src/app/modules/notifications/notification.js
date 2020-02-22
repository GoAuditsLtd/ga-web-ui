import React from 'react';
import {
} from 'react-bootstrap';
import NotificationList from './feature/notifications/notificationList';
import NotificationHeader from './feature/notifications/notificationHeader';


export default function Notification() {
  return (
    <>
      
        <NotificationHeader/>
        <NotificationList />
        
    </>
  )
}
