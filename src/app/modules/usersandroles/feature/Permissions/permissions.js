import React from 'react';
import {
} from 'react-bootstrap';
import PermissionsHeader from './permissionsHeader';
import PermissionsAccordion from './subFeatures/permissionsAccordion/permissionAccordion';




export default function Permissions() {
  return (
    <>
        <PermissionsHeader />
        <PermissionsAccordion />
        
    </>
  )
}