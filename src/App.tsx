import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookPage from './Pages/BookPage';
import DayPage from './Pages/DayPage';
import MoviePage from './Pages/MoviePage';
import Login from './User/Login/Login';
import Register from './User/Register/Register';
import BookProvider from './context/BookContext';
import DayProvider from './context/DayContext';
import MovieProvider from './context/MovieContext';
import PageProvider from './context/PageContainer';
import UserProvider from './context/userContext';
import Homepage from './Pages/Homepage';
import Userpage from './User/UserPage/Userpage';

function App() {
  return (
    <UserProvider>
      <DayProvider>
      <BookProvider>
      <MovieProvider>
        <PageProvider>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/user' element={<Userpage/>}/>
            <Route path='/movies' element={<MoviePage/>}/>
            <Route path='/books' element={<BookPage/>}/>
            <Route path='/days' element={<DayPage/> }/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </PageProvider>
      </MovieProvider>
      </BookProvider>
      </DayProvider>
    </UserProvider>
  );
}

export default App;
