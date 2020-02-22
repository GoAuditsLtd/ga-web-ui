import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav
} from 'react-bootstrap';

export default function DashboardSubNav() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link><Link to="/users">User</Link></Nav.Link>
        <Nav.Link><Link to="/manageaudits">Manage Audits</Link></Nav.Link>       
        <Nav.Link><Link to="/actionplan"></Link>Action Plan</Nav.Link>
        <Nav.Link><Link to="/schedule"></Link>Schedule</Nav.Link>
        <Nav.Link><Link to="/notification"></Link>Notification</Nav.Link>
        <Nav.Link><Link to="/groupaudit"></Link>Group Audits</Nav.Link>
        <Nav.Link><Link to="/myaccount"></Link>My Account</Nav.Link>
    </Nav>
  )
}
