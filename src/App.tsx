import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Navigation from './components/Navigation/Navigation';
import BookProvider from './context/BookContext';
import PageProvider from './context/PageContainer';

function App() {
  return (
    <PageProvider>
      <BookProvider>
        <div className="flex">
          <Navigation/>
          <div className="min-w-[300px] max-w-[300px]"></div>
          <Dashboard/>
        </div>
      </BookProvider>
    </PageProvider>
  );
}

export default App;
