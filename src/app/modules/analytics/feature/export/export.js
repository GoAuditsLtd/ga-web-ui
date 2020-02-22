import React from 'react';
import {
} from 'react-bootstrap';
import ExportHeader from './exportHeader';
import ExportCards from './subfeature/exportCards/exportCards';


export default function Export() {
  return (
    <>
        <ExportHeader />
        <br/>
        <ExportCards />
          
    </>
  )
}