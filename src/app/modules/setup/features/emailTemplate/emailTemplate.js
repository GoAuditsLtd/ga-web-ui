import React from 'react';
import {
} from 'react-bootstrap';
import EmailTemplateHeader from './emailTemplateHeader';
import EmailTemplateAccordion from './subFeature/emailTemplateAccordion';


export default function EmailTemplate() {
  return (
    <>
        <EmailTemplateHeader />
        <br/>
        <EmailTemplateAccordion  />
      
        
    </>
  )
}
