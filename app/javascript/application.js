import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Greeting from './greeting';
import store from './store';

const App = () => (
  <Routes>
    <Route path="" element={<Greeting />} />
  </Routes>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router><App /></Router>
    </Provider>
  </React.StrictMode>,
);
