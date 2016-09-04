import React from 'react';

const CollectionItem = ({collection}) => {
  const content = collection.firstImage === undefined ? 'http://images.clipartpanda.com/sad-face-clipart-black-and-white-z7Tanj8iA.jpeg' : collection.firstImage.url
  return(
    <li id={collection.title}>
      <img src={content}></img>
    </li>
  );
};

export default CollectionItem;
