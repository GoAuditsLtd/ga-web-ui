import React from 'react';
import {
  Table, Row, Col
} from 'react-bootstrap';

export default function AuditList() {
const marginTop20px = {
    'margin-top': '20px'
    }

  return (
    <>
        <Row style={marginTop20px}>
            <Col>
                <Table striped bordered hover>
                    <thead >
                        <tr>
                        <th>#</th>
                        <th>Company</th>
                        <th>Audit Name</th>
                        <th>Location</th>
                        <th>Audit Date</th>
                        <th>Auditor</th>
                        <th>Status</th>
                        <th>Score</th>
                        <th>Tags</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Marketcube.io</td>
                        <td>Tech Security Audit</td>
                        <td>Portal</td>
                        <td>Marketcube.io</td>
                        <td>Active</td>
                        <td>Google Analytics</td>
                        <td>1EM</td>
                        <td>Lead Dev</td>
                        <td>None</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Sheraz Saleem</td>
                        <td>sheraz.saleem@goaudits.com</td>
                        <td>Go Audit</td>
                        <td>Marketcube.io</td>
                        <td>https://portal.goaudits.com/</td>
                        <td>Google Analytics</td>
                        <td>React Dev</td>
                        <td>Lead Dev</td>
                        <td>Active</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Sheraz Saleem</td>
                        <td>sheraz.saleem@goaudits.com</td>
                        <td>Go Audit</td>
                        <td>Marketcube.io</td>
                        <td>https://portal.goaudits.com/</td>
                        <td>Google Analytics</td>
                        <td>React Dev</td>
                        <td>Lead Dev</td>
                        <td>Inactive</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>Sheraz Saleem</td>
                        <td>sheraz.saleem@goaudits.com</td>
                        <td>Go Audit</td>
                        <td>Marketcube.io</td>
                        <td>https://portal.goaudits.com/</td>
                        <td>Google Analytics</td>
                        <td>React Dev</td>
                        <td>Lead Dev</td>
                        <td>Inactive</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>Sheraz Saleem</td>
                        <td>sheraz.saleem@goaudits.com</td>
                        <td>Go Audit</td>
                        <td>Marketcube.io</td>
                        <td>https://portal.goaudits.com/</td>
                        <td>Google Analytics</td>
                        <td>React Dev</td>
                        <td>Lead Dev</td>
                        <td>Archived</td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td>Sheraz Saleem</td>
                        <td>sheraz.saleem@goaudits.com</td>
                        <td>Go Audit</td>
                        <td>Marketcube.io</td>
                        <td>https://portal.goaudits.com/</td>
                        <td>Google Analytics</td>
                        <td>React Dev</td>
                        <td>Lead Dev</td>
                        <td>Archived</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </>
  )
}
