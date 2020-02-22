import React from 'react';
import {
} from 'react-bootstrap';
import MyAccountHeader from './myAccountHeader';
import PaymentDetails from './feature/paymentDetails/paymentDetails';


export default function MyAccount() {
  return (
    <>
      
        <MyAccountHeader />
        <PaymentDetails />
        
    </>
  )
}
