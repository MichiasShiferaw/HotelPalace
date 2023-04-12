import React from 'react';
// import ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import RoomProvider from './Contexts/BookingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoomProvider>
  <Provider store={store}>
    <App />
  </Provider>
  </RoomProvider>
);

