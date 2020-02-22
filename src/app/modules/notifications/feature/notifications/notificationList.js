import React from 'react';
import {
  Table, Row, Col
} from 'react-bootstrap';

export default function NotificationList() {
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>App</th>
                        <th>Company</th>
                        <th>Portal</th>
                        <th>Analytics</th>
                        <th>Roles</th>
                        <th>Tags</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
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
