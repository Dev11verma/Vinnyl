// src/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function ProtectedRoute({ element }) {
  const [user] = useAuthState(auth);

  return user ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
