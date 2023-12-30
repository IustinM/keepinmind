import { Route, Routes,} from 'react-router-dom';
import BookPage from './Pages/BookPage';
import DayPage from './Pages/DayPage';
import MoviePage from './Pages/MoviePage';
import Login from './User/Login/Login';
import Register from './User/Register/Register';
import Homepage from './Pages/Homepage';
import Userpage from './User/UserPage/Userpage';
import ProtectedRoute from './components/utils/ProtectedRoute';
import ForgotPassword from './User/ForgotPassword/ForgotPassword';

function App() {

  return (
          <Routes>
            <Route path='/keepinmind' element={<Homepage/>}/>
            <Route path='/keepinmind/user' element={<ProtectedRoute component={Userpage} />} />
            <Route path='/keepinmind/movies' element={<ProtectedRoute component={MoviePage} />} />
            <Route path='/keepinmind/books' element={<ProtectedRoute component={BookPage} />} />
            <Route path='/keepinmind/days' element={<ProtectedRoute component={DayPage} />} />
            <Route path='/keepinmind/login' element={<Login/>}/>
            <Route path='/keepinmind/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/keepinmind/register' element={<Register/>}/>
          </Routes>
  );
}

export default App;
