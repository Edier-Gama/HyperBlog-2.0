
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { createRole } from './createRole';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react'


const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const location = useLocation()
  const navigate = useNavigate();
  const prevLocation = useRef(null)
  const [user, setUser] = React.useState(null);
  
  React.useEffect(() => {
    const localStorageUser = localStorage.getItem('USER');
    if (localStorageUser) {
      setUser(JSON.parse(localStorageUser));
    }
  }, []);
  
  React.useEffect(() => {
    localStorage.setItem('USER', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    prevLocation.current = location
  }, [location])

  const prevUrl = prevLocation.current ? prevLocation.current.pathname : '/'
  
  const login = ({ username }) => {
    const role = createRole(username);
    setUser({ username, role});
    navigate(prevUrl);
  };
  
  const logout = () => {
    setUser(null);
    navigate('/');
  };
  
  const auth = { user, login, logout };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

function ProtectedRoute(props) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

export {
  AuthProvider,
  ProtectedRoute,
  useAuth,
};