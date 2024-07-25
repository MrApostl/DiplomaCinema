import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { watcherUsers, watcherMovies } from './sagas';
import { usersReducer, movieReducer } from './reducers';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        watcherMovies(),
        watcherUsers(),
    ]);
}

const mainReducer = combineReducers({
    movies: movieReducer,
    users: usersReducer,
})

export const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
