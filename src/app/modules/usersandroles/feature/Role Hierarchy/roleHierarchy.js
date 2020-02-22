import React from 'react';
import {
} from 'react-bootstrap';
import RoleHierarchyAccordion from './subFeatures/roleHierarchyAccordion/roleHierarchyAccordion';
import RoleHierarchyHeader from './roleHierarchyHeader';

export default function RoleHierarchy() {
  return (
    <>
        <RoleHierarchyHeader />
        <RoleHierarchyAccordion />
        
    </>
  )
}