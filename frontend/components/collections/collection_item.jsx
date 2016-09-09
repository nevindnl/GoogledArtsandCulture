import React from 'react';

const CollectionItem = ({collection}) => {
  const content = collection.firstImage === undefined ? 'http://www.pbs.org/newshour/data/bubble-quiz/images/facebook-square.svg' : collection.firstImage.thumbUrl;
  return(
    <li id={collection.id}>
      <img src={content}></img>
      <span>
        <div>{collection.title}</div>
      </span>
    </li>
  );
};

export default CollectionItem;
