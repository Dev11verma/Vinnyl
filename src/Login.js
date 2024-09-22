// src/Login.js
import React from 'react';
import { signInWithGoogle, signOutUser } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function Login() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <div>
          <h3>Welcome, {user.displayName}!</h3>
          <button onClick={signOutUser}>Sign Out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
}

export default Login;
