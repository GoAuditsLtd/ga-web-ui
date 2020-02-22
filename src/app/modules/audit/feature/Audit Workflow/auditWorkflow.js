import React from 'react';
import {
} from 'react-bootstrap';
import AuditWorkflowList from './subFeatures/auditWorkflowList/auditWorkflowList';
import AuditWorkflowHeader from './subFeatures/auditWorkflowHeader';


export default function AuditWorkflow() {
  return (
    <>
      
        <AuditWorkflowHeader/>
        <AuditWorkflowList />
        
    </>
  )
}
