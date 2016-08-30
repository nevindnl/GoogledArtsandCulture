import {applyMiddleware} from 'redux';

import SessionMiddleware from './session_middleware';
import ImagesMiddleware from './images_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ImagesMiddleware
);

export default RootMiddleware;
