import React from 'react';
import { Provider } from 'react-redux';

// Store
import store from './store';

// Components
import Cart from './Cart';

const App = () => (
  <Provider store={store}>
    <div> Proyecto del Carinho </div>
    <Cart />
  </Provider>
)

export default App;
