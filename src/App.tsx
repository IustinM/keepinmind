import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import BookPage from './Pages/BookPage';
import DayPage from './Pages/DayPage';
import MoviePage from './Pages/MoviePage';
import Login from './User/Login/Login';
import Register from './User/Register/Register';
import BookProvider from './context/BookContext';
import DayProvider from './context/DayContext';
import MovieProvider from './context/MovieContext';
import PageProvider, { PageContext } from './context/PageContainer';
import UserProvider, { UserContext } from './context/UserContext';
import Homepage from './Pages/Homepage';
import Userpage from './User/UserPage/Userpage';
import ProtectedRoute from './components/utils/ProtectedRoute';
import Loading from './Pages/Loading';
import ForgotPassword from './User/ForgotPassword/ForgotPassword';

function App() {
  const navigate = useNavigate();
  // const location =  useLocation();

  const {userLogged,setUserLogged} = useContext(UserContext);
  const {loadingApp,setLoadingApp} = useContext(PageContext);



  

  return (
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/user' element={<ProtectedRoute component={Userpage} />} />
            <Route path='/movies' element={<ProtectedRoute component={MoviePage} />} />
            <Route path='/books' element={<ProtectedRoute component={BookPage} />} />
            <Route path='/days' element={<ProtectedRoute component={DayPage} />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
  );
}

export default App;
