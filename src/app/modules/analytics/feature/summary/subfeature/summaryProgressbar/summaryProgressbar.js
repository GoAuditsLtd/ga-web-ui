import React from 'react';
import { 
  Row,
  Col,
  ProgressBar
}  from 'react-bootstrap';

export default function SummaryProgressbar() {
  return (
    <>
      <Row>
                <Col>
                    <ProgressBar variant="info" now={25} label={`${25}%`} />New Audits<br/>
                    <ProgressBar variant="info" now={50} label={`${50}%`} />Still todo<br/>
                    <ProgressBar variant="info" now={75} label={`${75}%`} />Done<br/>
                </Col>
                <Col>
                    <ProgressBar variant="danger"now={33} label={`${33}%`} /><br/>
                    <ProgressBar variant="warning"now={66} label={`${66}%`} /><br/>
                    <ProgressBar variant="success"now={99} label={`${99}%`} /><br/>
                </Col>
      </Row>
        
    </>
  )
}
