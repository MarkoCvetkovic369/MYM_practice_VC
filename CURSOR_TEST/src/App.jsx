import { useState, useEffect, useCallback, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import './App.css';

function App() {
  const [isExiting, setIsExiting] = useState(false);
  const exitTimerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsExiting(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
      }
    };
  }, []);

  const handleAboutClick = useCallback(
    (e) => {
      e.preventDefault();
      if (location.pathname === '/') {
        setIsExiting(true);
        exitTimerRef.current = setTimeout(() => {
          setIsExiting(false);
          navigate('/about');
        }, 700);
      } else {
        navigate('/about');
      }
    },
    [location.pathname, navigate],
  );

  return (
    <div className="page">
      <div className="page__bg" aria-hidden="true">
        <div className="page__gradient" />
        <div className="page__noise" />
      </div>

      <Navbar isExiting={isExiting} onAboutClick={handleAboutClick} />
      <Routes>
        <Route path="/" element={<Home isExiting={isExiting} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
