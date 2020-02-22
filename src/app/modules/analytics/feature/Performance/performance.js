import React from 'react';
import {
} from 'react-bootstrap';
import PerformanceCards from './subfeature/performanceCards/performanceCards';
import PerformanceProgressbar from './subfeature/performanceProgressbar/performanceProgressbar';
import PerformanceHeader from './performanceHeader';


export default function Performance() {
  return (
    <>
        <PerformanceHeader />
        <br/>
        <PerformanceCards />
        <br/>
        <PerformanceProgressbar />   
    </>
  )
}