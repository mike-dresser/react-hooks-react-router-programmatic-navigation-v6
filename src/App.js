import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [isLoggedIn]);

  return (
    <div className="app">
      {isLoggedIn ? (
        <NavBar isLoggedIn={isLoggedIn} logout={logout} />
      ) : (
        <Navigate to="/login" />
      )}
      <Outlet context={login} />
    </div>
  );
}

export default App;
