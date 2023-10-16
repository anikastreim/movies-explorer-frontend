import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { mainApi } from '../../utils/MainApi';
import './App.css';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentPath, setCurrentPath] = useState(location.pathname);
  
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([
        mainApi.getUserInfo(),
        mainApi.getSavedMovies()
      ])
      .then(([user, savedUserMovies]) => {
        setCurrentUser(user);
        setSavedMovies(savedUserMovies);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [loggedIn]);
  
  async function handleSaveMovie(movie) {
    const isMovieSaved = savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
    try {
      if (isMovieSaved) {
        const savedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
        await mainApi.deleteMovie(savedMovie._id);
        const updatedSavedMovies = savedMovies.filter((savedMovie) => savedMovie.movieId !== movie.id);
        setSavedMovies(updatedSavedMovies);
      } else {
        const newMovie = await mainApi.saveMovie(movie);
        setSavedMovies([...savedMovies, newMovie]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDeleteMovie(movieId) {
    try {
      await mainApi.deleteMovie(movieId);
      const updatedSavedMovies = savedMovies.filter((movie) => movieId !== movie._id);
      setSavedMovies(updatedSavedMovies);
    } catch (err) {
      console.error(err);
    }
  }
  
  function handleRegister({ name, email, password }) {
    mainApi.register(name, email, password)
      .then(() => handleUserAuthentication({ email, password }))
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin({ email, password }) {
    handleUserAuthentication({ email, password })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleUserAuthentication({ email, password }) {
    return mainApi.login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          return mainApi.checkToken(data.token);
        }
      })
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user);
        navigate("/movies", { replace: true });
      });
  }

  function handleSignOut() {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/", { replace: true });
  }

  function handleTokenCheck() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi.checkToken(jwt)
        .then((user) => {
          setLoggedIn(true);
          setCurrentUser(user);
          if (currentPath !== "/") {
            navigate(currentPath, { replace: true });
          }
        })
        .catch((err) => {
          console.log(err);
          setLoggedIn(false);
        });
    }
  }
  
  function handleUpdateUser(user) {
    mainApi.updateUserInfo(user)
    .then((user) => {
      setCurrentUser(user);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/signup" element={<Register loggedIn={loggedIn} handleRegister={handleRegister} />} />
        <Route path="/signin" element={<Login loggedIn={loggedIn} handleLogin={handleLogin} />} />
        <Route path="/profile" element={<ProtectedRoute loggedIn={loggedIn} onSignOut={handleSignOut} element={Profile} onSubmit={handleUpdateUser} />} />
        <Route path="/movies" element={<ProtectedRoute loggedIn={loggedIn} element={Movies} savedMovies={savedMovies} onSaveMovie={handleSaveMovie} onDeleteMovie={handleDeleteMovie} />} />
        <Route path="/saved-movies" element={<ProtectedRoute loggedIn={loggedIn} element={SavedMovies} savedMovies={savedMovies} onDeleteMovie={handleDeleteMovie} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  )
};

export default App;