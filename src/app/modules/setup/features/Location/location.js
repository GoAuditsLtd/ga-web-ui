import React from 'react';
import {
} from 'react-bootstrap';
import LocationList from './subFeatures/locationList/locationList';
import LocationHeader from './locationHeader';



export default function Location() {
  return (
    <>
        <LocationHeader />
        <LocationList />
        
    </>
  )
}
