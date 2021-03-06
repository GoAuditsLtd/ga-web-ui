import React from 'react';
import {
 Row
} from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function GroupAuditHeader() {
  const marginTop20px = {
    'margin-top': '20px'
  }
  return (
    
    <>
      <Row style={marginTop20px}>
          <Col sm={11}><h2>Group Audit</h2></Col>
          <Col m={1}>
            <button type="button" class="btn btn-outline-dark"> +Add</button>
          </Col>
      </Row>
    </>
  )
}
