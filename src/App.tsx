import React from 'react';
import './App.css';
import Header from './components/header/Header.tsx';
import ProductPage from './components/page/ProductPage.tsx';
import store from './redux/store/store.tsx';
import { Provider } from 'react-redux';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <div className="app-container">
        <Header />
        <ProductPage />
      </div>
    </Provider>
  );
}

export default App;
