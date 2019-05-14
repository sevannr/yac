import { createStore } from 'redux';

// Reducer
import cart from './cart';

const store = createStore(cart);

export default store;