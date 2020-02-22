import React from 'react';
import {
} from 'react-bootstrap';
import UserslistTable from './subfeatures/userListTable'
import UserslistHeader from './subfeatures/userListHeader';

export default function Userslist() {
  return (
    <>
      
        <UserslistHeader/>
        <UserslistTable />
        
    </>
  )
}
