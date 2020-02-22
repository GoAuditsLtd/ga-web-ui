import React from 'react';
import { 
  Row,
  Col,
  Card
}  from 'react-bootstrap';

export default function TagsCard() {
  return (
    <>
      <Row>
        <Col>
            <br/>
          <Card style={{ width: '30rem' }}>
              <Card.Body>
                <Card.Title>Sheraz-Test</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tag Name</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            
          </Col>
          <Col>
            <br/>
          <Card style={{ width: '30rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            
          </Col>
          <br/>
          <Col>
            <br/>
          <Card style={{ width: '30rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            
          </Col>
      </Row>
        
    </>
  )
}
