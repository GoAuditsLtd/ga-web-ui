import React from 'react';
import {
} from 'react-bootstrap';
import GroupAuditHeader from './subFeatures/groupAuditHeader/groupAuditHeader';
import GroupAuditList from './subFeatures/groupAuditList/groupAuditList';


export default function GroupAudit() {
  return (
    <>
      
        <GroupAuditHeader />
        <GroupAuditList />
        
    </>
  )
}
