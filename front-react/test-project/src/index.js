// import React from 'react'
// import * as serviceWorker from './serviceWorker';
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import rootReducer from './reducers'
// import App from './App'
// import logger from 'redux-logger'
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from './sagas';
// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

// sagaMiddleware.run(rootSaga)
// render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//     ,
//     document.getElementById('root')
// )


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
import reportWebVitals from './reportWebVitals';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './App'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)
render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();