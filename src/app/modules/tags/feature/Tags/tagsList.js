import React from 'react';
import {
} from 'react-bootstrap';
import TagsCard from './subFeatures/tagsCard/tagsCard';
import TagsHeader from './tagsHeader';

export default function TagsList() {
  return (
    <>
        <TagsHeader />
        <br/>
        <TagsCard />   
    </>
  )
}