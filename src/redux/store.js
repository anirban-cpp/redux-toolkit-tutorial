import { configureStore } from "@reduxjs/toolkit";

import cakeReducer from "./cakeSlice";
import icecreamReducer from "./iceCreamSlice";
import userReducer from "./userSlice";
import createSagaMiddleware from "@redux-saga/core";
import onfetchUserRequet from "./userSagas";
import postReducer from "./postSlice";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), saga], // thunk is there by default in redux toolkit. If we want to use both we have to do like this. Otherwise it will overwrite the existing middlewares
});

saga.run(onfetchUserRequet);

export default store;
