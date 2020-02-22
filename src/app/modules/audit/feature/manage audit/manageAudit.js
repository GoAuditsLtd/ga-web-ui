import React from 'react';
import {
} from 'react-bootstrap';

import AuditList from './subFeatures/auditsList/auditList';
import ManageAuditHeader from './manageAuditHeader';

export default function ManageAudit() {
  return (
    <>
      
        <ManageAuditHeader />
        <AuditList />
        
    </>
  )
}
