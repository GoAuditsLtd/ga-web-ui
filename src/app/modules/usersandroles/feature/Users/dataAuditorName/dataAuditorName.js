import React from 'react';
import {
} from 'react-bootstrap';
import useFetch from "react-fetch-hook";

export default function DataAuditorName() {
  const { isLoading, data } = useFetch("http://34.209.19.44:8080/goaudits_apis/api/demo/list/")

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    data.map((userDetails, index)=>{
      return <tr>
          <td>{userDetails.client_name}</td>
          <td>{userDetails.audit_type_name}</td>
          <td>{userDetails.store_name}</td>
          <td>{userDetails.audit_date}</td>
          <td>{userDetails.auditor_name}</td>
          <td>{userDetails.status_name}</td>
      </tr>
    })
  );
       
}
