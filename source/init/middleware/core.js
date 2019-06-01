import { applyMiddleware, compose } from 'redux';

//middleware
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => '#139BFE',
        prevState: () => '#15C5FAF',
        action: () => '#149945',
        nextState: () => '#A47104',
        error: () => '#ff0005'
    }
})

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;
const sagaMiddleware = createSagaMiddleware();

const middleware = [ sagaMiddleware ];

if(__DEV__) {
    middleware.push(logger);
}

const enhancedStore = composeEnhancers( applyMiddleware(...middleware) );

export { enhancedStore, sagaMiddleware };