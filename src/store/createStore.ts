
import { combineReducers, createStore, ReducersMapObject } from "redux";
import { AuthReducer } from "../reducers/auth";
import { ConstsReducer } from "../reducers/consts";
import { EntryReducer } from "../reducers/entry";
import { MemberPostsReducer } from "../reducers/member_posts";
import { PartsReducer } from "../reducers/parts";
import { PostsReducer } from "../reducers/posts";
import { RemindReducer } from "../reducers/remind";

import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore
} from '@reduxjs/toolkit'
import logger from 'redux-logger'


const rootReducer = combineReducers({
  AuthReducer,
  ConstsReducer,
  EntryReducer,
  MemberPostsReducer,
  PartsReducer,
  PostsReducer,
  RemindReducer,
});

export const setupStore = (): EnhancedStore => {
  const middlewares = [...getDefaultMiddleware()]

  // only development
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }

  return configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: true
  })
}