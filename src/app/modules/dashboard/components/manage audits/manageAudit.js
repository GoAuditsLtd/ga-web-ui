import React from 'react';
import {
  Jumbotron,
  Button
} from 'react-bootstrap';

export default function ManageAudits() {
  return (
    <Jumbotron>
        <h1>Manage Audits</h1>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        <p>
            <Button variant="primary">Learn more</Button>
        </p>
    </Jumbotron>
  )
}
