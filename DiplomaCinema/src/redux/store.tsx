import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import movieReducer from './reducers/movies-reducer';
import { watcherMovies } from './sagas/movies-sagas';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        watcherMovies(),
    ]);
}

export const store = createStore(movieReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
