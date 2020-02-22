import React from 'react';
import {
} from 'react-bootstrap';
import TrendsTable from './subfeature/trendsTable/trendsTable';
import TrendsHeader from '../trends/trendsHeader';
import TrendsJumbotron from '../trends/subfeature/trendsJumbotron/trendsJumbotron';

export default function Trends() {
  return (  
    <>
        <TrendsHeader />
        <br/>
        <TrendsJumbotron />
        <br/>
        <TrendsTable />
       
    </>
  )
}