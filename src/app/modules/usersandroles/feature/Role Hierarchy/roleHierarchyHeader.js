import React from 'react';
import {
 Row
} from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function RoleHierarchyHeader() {
  const marginTop20px = {
    'margin-top': '20px'
  }
  return (
    
    <>
      <Row style={marginTop20px}>
          <Col sm={10}><h2>Role Hierarchy</h2></Col>
          <Col m={1}>
            <button type="button" class="btn btn-outline-dark">Add</button>
          </Col>
          <Col sm={1}>
            <button type="button" class="btn btn-outline-dark">Export</button>
          </Col>
      </Row>
    </>
  )
}
