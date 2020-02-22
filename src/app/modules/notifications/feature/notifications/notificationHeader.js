import React from 'react';
import {
 Row
} from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function NotificationHeader() {
  const marginTop20px = {
    'margin-top': '20px'
  }
  return (
    
    <>
      <Row style={marginTop20px}>
          <Col sm={10}><h2>Notification</h2></Col>
          <Col sm={1}>
            <button type="button" class="btn btn-outline-dark"> Create</button>
          </Col>
          <Col sm={1}>
            <button type="button" class="btn btn-outline-dark">Edit</button>
          </Col>
      </Row>
    </>
  )
}
