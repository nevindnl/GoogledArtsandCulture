import React from 'react';

const CollectionItem = ({collection}) => (
  <li>
    <img src={collection.firstImage.url}></img>
  </li>
);

export default CollectionItem;
