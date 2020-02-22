import React from 'react';
import {
} from 'react-bootstrap';
import RoleHeader from './rolesHeader';
import RoleAccordion from './subFeatures/roleAccordion/roleAccordion';


export default function Roles() {
  return (
    <>
        <RoleHeader />
        <RoleAccordion />
        
    </>
  )
}