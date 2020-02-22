import React from 'react';
import {
 Row, Col, Table
} from 'react-bootstrap';
import DataAuditorName from '../../dataAuditorName/dataAuditorName';

export default function UsersListTable() {

    const marginTop20px = {
    'margin-top': '20px'
    }

  return (
    <>
        <Row style={marginTop20px}>
            <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Client Name</th>
                            <th>Audit Type Name</th>
                            <th>Store Name</th>
                            <th>Audit Date</th>
                            <th>Auditor Name</th>
                            <th>Status Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <DataAuditorName />
                    </tbody>
                </Table>        
            </Col>
        </Row>
    </>
  )
}
