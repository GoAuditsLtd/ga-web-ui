import React from 'react';
import {
 Row, 
 Col,
 CardDeck,
 Card
} from 'react-bootstrap';

export default function PaymentDetails() {
const marginTop20px = {
    'margin-top': '20px'
    }

  return (
    <>
        <Row style={marginTop20px}>
            <Col >
            <CardDeck>
                    <Card>
                        <Card.Body>
                        <Card.Title><h3>Free</h3></Card.Title>
                        <Card.Text>
                            $0 / Month <br/>
                            10 users included<br/>
                            2 GB of Storage<br/>
                            Email Support<br/>
                            Help Center Access<br/>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <h5>Sign Up For Free</h5>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title><h3>Pro</h3></Card.Title>
                        <Card.Text>
                            $30 / Month <br/>
                            50 users included<br/>
                            20 GB of Storage<br/>
                            Priority Email Support<br/>
                            24hr Help Center Access<br/>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <h5>Get Started</h5>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body>
                        <Card.Title><h3>Enterprise</h3></Card.Title>
                        <Card.Text>
                            $59 / Month <br/>
                            150 users included<br/>
                            40 GB of Storage<br/>
                            Phone and Email Support<br/>
                            Help Center Access<br/>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <h5 >Contact Us</h5>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Col>
        </Row>
    </>
  )
}
