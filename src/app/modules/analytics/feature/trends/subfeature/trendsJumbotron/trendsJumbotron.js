import React from 'react';
import {
  Jumbotron,
  Button
} from 'react-bootstrap';

export default function TrendsJumbotron() {
  return (
    <Jumbotron>
        <h1>Action Plan</h1>
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
