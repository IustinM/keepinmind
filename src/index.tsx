import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './context/UserContext';
import PageProvider from './context/PageContainer';
import BookProvider from './context/BookContext';
import DayProvider from './context/DayContext';
import MovieProvider from './context/MovieContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
    <DayProvider>
      <BookProvider>
      <MovieProvider>
        <PageProvider>
          <App />
      </PageProvider>
      </MovieProvider>
      </BookProvider>
      </DayProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);


