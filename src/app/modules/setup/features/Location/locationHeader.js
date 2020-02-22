import React from 'react';
import {
 Row,
 Form, 
 FormControl,
} from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function LocationHeader() {
  const marginTop20px = {
    'margin-top': '20px'
  }
  return (
    
    <>
      <Row style={marginTop20px}>
          <Col sm={9}><h2>Location</h2></Col>
          <Col sm={1}>
            <button type="button" class="btn btn-outline-dark">+ Add</button>
          </Col>
          <Col sm={2}>
          <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
          </Col>
        
      </Row>
    </>
  )
}
