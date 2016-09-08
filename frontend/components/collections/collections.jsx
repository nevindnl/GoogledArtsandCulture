import React from 'react';
import Masonry from 'react-masonry-component';

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
      <Masonry
                className={''} // default ''
                options={{
                  fillWidth: true
                }}
                elementType={'ul'} // default 'div'
                disableImagesLoaded={false}
                updateOnEachImageLoad={true}
            >
        {collectionItems}
      </Masonry>
    </div>
  );
};

export default Collections;
