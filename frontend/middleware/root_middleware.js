import {applyMiddleware} from 'redux';

import SessionMiddleware from './session_middleware';
import ImagesMiddleware from './images_middleware';
import CollectionsMiddleware from './collections_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ImagesMiddleware,
  CollectionsMiddleware
);

export default RootMiddleware;
