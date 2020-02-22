import React from 'react';
import {
 Row
} from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function AuditWorkflowHeader() {
  const marginTop20px = {
    'margin-top': '20px'
  }
  return (
    
    <>
      <Row style={marginTop20px}>
          <Col sm={10}><h2>Workflow</h2></Col>
          <Col sm={2}>
            <button type="button" class="btn btn-outline-dark">Create</button>
          </Col>
      </Row>
    </>
  )
}
