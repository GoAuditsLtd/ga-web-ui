import React from 'react';
import {
} from 'react-bootstrap';
import HierarchyHeader from './hierarchyHeader'
import HierarchyJumbotron from './subfeature/hierarchyumbotron/hierarchyumbotron'
import HierarchyCards from './subfeature/hierarchyCards/hierarchyCards'
import HierarchyTable from './subfeature/hierarchyTable/hierarchyTable'

export default function Hierarchy() {
  return (  
    <>
        <HierarchyHeader />
        <br/>
        <HierarchyJumbotron />
        <br/>
        <HierarchyCards />
        <br/>
        <HierarchyTable />
       
    </>
  )
}