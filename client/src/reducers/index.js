import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import userReducer from './userReducer';
import scheduleReducer from './scheduleReducer';

const rootReducer = combineReducers({
  currentUser: userReducer,
  schedule: scheduleReducer
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [ 'currentUser', 'schedule' ],
  blacklist: [ ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer
