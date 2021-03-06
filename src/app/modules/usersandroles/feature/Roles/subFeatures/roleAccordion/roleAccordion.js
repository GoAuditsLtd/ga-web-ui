import React from 'react';
import {
Accordion,
Card,
} from 'react-bootstrap';

export default function RoleAccordion() {
  return (
    <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Portal Active<br/>
          View Permissions<br/>
          View Hierarchy<br/>
          </Card.Body>
    </Accordion.Collapse>
  </Card>
  <br/>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
  )
}
