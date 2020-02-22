import React from 'react';
import {
    Nav,
    Col,
    Row,
    Tab
} from 'react-bootstrap';
import QuestionnaireList from './features/Questionnaire/questionnaire';
import ReportConfiguration from '../reporting/reporting';
import EmailTemplate from '../setup/features/emailTemplate/emailTemplate';
import Company from './features/Company/company';
import Location from './features/Location/location';
import AuditNames from './features/Audit Names/auditNames';

export default function Setup() {
  return (
    <>    
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Company</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Location</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Audit Names</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Questionnaire</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Report Configuration</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth">Email Template</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Company />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Location />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <AuditNames />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <QuestionnaireList />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <ReportConfiguration />
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <EmailTemplate />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    
    </>
  )
}