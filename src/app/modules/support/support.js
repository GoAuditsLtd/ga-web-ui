import React from 'react';
import {
    Nav,
    Col,
    Row,
    Tab
} from 'react-bootstrap';
import AskQuestion from './feature/askQuestion/askQuestion';
import ContactUs from './feature/contactUs/contactUs';
import FAQs from './feature/faqs/faqs';

export default function Support() {
  return (
    <>    
   <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Ask a Question</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Contact Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">FAQ's</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AskQuestion />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ContactUs />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <FAQs />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    
    </>
  )
}