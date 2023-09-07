import {Route, Routes} from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/saved-movies" element={<SavedMovies />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
};

export default App;
