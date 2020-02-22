import React from 'react';
import {
 Row
} from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function ManageAuditHeader() {
  const marginTop20px = {
    'margin-top': '20px'
  }
  return (
    
    <>
      <Row style={marginTop20px}>
          <Col sm={10}><h2>Manage Audit</h2></Col>
          <Col m={1}>
            <button type="button" class="btn btn-outline-dark">Reset</button>
          </Col>
          <Col sm={1}>
            <button type="button" class="btn btn-outline-dark">Filter</button>
          </Col>
      </Row>
    </>
  )
}
