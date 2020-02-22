import React from 'react';
import {
 Row
} from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function MyAccountHeader() {
  const marginTop20px = {
    'margin-top': '20px'
  }
  return (
    
    <>
      <Row style={marginTop20px}>
          <Col sm={10}><h3>My Account Details</h3></Col>
          <Col m={2}>
            <button type="button" class="btn btn-outline-success">Stauts = Enterprise </button>
          </Col>
      </Row>
    </>
  )
}
