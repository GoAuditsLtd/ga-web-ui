import React from 'react';
import {
} from 'react-bootstrap';
import AuditNamesHeader from './subFeatures/auditNamesHeader';
import AuditNamesList from './subFeatures/auditNamesList/auditNamesList';



export default function AuditNames() {
  return (
    <>
        <AuditNamesHeader/>
        <AuditNamesList />
        
    </>
  )
}
