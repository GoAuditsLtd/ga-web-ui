import React from 'react';
import {
} from 'react-bootstrap';
import ReportConfigList from './feature/report configuration/subFeatures/reportConfigList/reportConfigList';
import ReportConfigHeader from './feature/reportConfigHeader';



export default function Reporting() {
  return (
    <>
        <ReportConfigHeader />
        < ReportConfigList />
        
    </>
  )
}
