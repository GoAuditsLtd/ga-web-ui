import React from 'react';
import { 
  Row,
  Col,
  Card
}  from 'react-bootstrap';

export default function ExportCards() {
  return (
    <>
      <Row>
        <Col>
            <br/>
            <Card text="black" style={{ width: '20rem', height: '10rem' }}>
                        <Card.Header>Export Details</Card.Header>
                        <Card.Body>
                        <Card.Title><h1>1,203</h1></Card.Title>
                        <Card.Text bg="info">
                            Run your report here.
                        </Card.Text>
                        </Card.Body>
                </Card>
                <br/>
            <Card text="black" style={{ width: '20rem', height: '10rem' }}>
                        <Card.Header>Export Details</Card.Header>
                        <Card.Body>
                        <Card.Title><h1>1,203</h1></Card.Title>
                        <Card.Text bg="info">
                            Run your report here.
                        </Card.Text>
                        </Card.Body>
                </Card>
          </Col>
      </Row>
        
    </>
  )
}
