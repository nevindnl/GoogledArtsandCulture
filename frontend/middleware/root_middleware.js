import {applyMiddleware} from 'redux';
import logger from 'redux-logger';

import SessionMiddleware from './session_middleware';
import ImagesMiddleware from './images_middleware';
import CollectionsMiddleware from './collections_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ImagesMiddleware,
  CollectionsMiddleware,
  logger()
);

export default RootMiddleware;
