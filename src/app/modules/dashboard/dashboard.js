import React from 'react';
import {
    Row,
    Col,
    Tab,
    Nav
} from 'react-bootstrap';
import UsersList from '../usersandroles/feature/Users/usersList/usersList'
import ActionPlan from './components/actionPlan/actionPlan';
import Notifications from '../notifications/notification';
import GroupAudits from '../audit/feature/Group Audit/groupAudits';
import MyAccount from '../my account/myAccount';
import ManageAudit from '../audit/feature/manage audit/manageAudit';
import Schedule from './components/schedule/schedule';

export default function Dashboard() {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="one">Users</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="two">Manage Audits</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="three">Action Plan</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="four">Schedule</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="five">Notification</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="six">Group Audit</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seven">My Account</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="one">
                <UsersList />
              </Tab.Pane>
              <Tab.Pane eventKey="two">
                <ManageAudit />
              </Tab.Pane>
              <Tab.Pane eventKey="three">
                <ActionPlan />
              </Tab.Pane>
              <Tab.Pane eventKey="four">
                <Schedule />
              </Tab.Pane>
              <Tab.Pane eventKey="five">
                <Notifications />
              </Tab.Pane>
              <Tab.Pane eventKey="six">
                <GroupAudits />
              </Tab.Pane>
              <Tab.Pane eventKey="seven">
                <MyAccount />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}
