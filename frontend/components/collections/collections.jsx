import React from 'react';

import CollectionItem from './collection_item';

const Collections = ({collections, header, subheader, newCollection, collectImages, invisible, router}) => {
  const collectionItems = collections.map(collection => (
    <CollectionItem collection={collection} key={collection.id} />
  ));

  if (newCollection){
    collectionItems.unshift(
      <li id='none' key={-1} onClick={collectImages}>
				<div id='new_collection'>
					<h4>+</h4>
					<h5>Create a new collection</h5>
					<h6>Select the items you would like to include from your list of favorites.</h6>
				</div>
      </li>
    );
  }

  return (
    <div className={invisible ? 'collections invisible' : 'collections'}>
      <h3>{header}</h3>
      <h6>{subheader}</h6>
      <ul>
        {collectionItems}
      </ul>
    </div>
  );
};

export default Collections;
