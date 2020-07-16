import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../Reducers';

let reduxCompose = compose;
const configureStore = () => {
     return createStore(Reducers, reduxCompose(applyMiddleware(thunk)))
}
export default configureStore;