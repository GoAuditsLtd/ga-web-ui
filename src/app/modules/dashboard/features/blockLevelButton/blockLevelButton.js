import React from 'react';
import {
Button
} from 'react-bootstrap';

export default function BlockLevelButton() {
  return (
    <>
  <Button variant="primary" size="lg" block>
    Block level button
  </Button>
  <Button variant="secondary" size="lg" block>
    Block level button
  </Button>
</>
  )
}
