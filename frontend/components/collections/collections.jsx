import React from 'react';

import CollectionItem from './collection_item';

const Collections = ({collections, header}) => {
  const collectionItems = collections.map(collection => (
    <CollectionItem collection={collection} key={collection.id} />
  ));

  return (
    <div className='collections'>
      <h3>{header}</h3>
      <ul>
        {collectionItems}
      </ul>
    </div>
  );
};

export default Collections;
