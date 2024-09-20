import React from 'react';
import Header from './component/Header';
import Home from './page/productHomePage';
import Cart from './component/Cart';
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className='cartBody'>
            <Header />
            <Home />
            <Cart />
        </div>
        
      </Provider>
    </>
  );
};

export default App;