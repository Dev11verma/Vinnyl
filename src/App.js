// src/App.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const responseGoogle = (response) => {
  console.log(response);
};

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"> {/* Replace with your actual client ID */}
      <div>
        <h1>Welcome to Vinnyl, Dev Verma!</h1>
        <div id="googleButton">
          <GoogleLogin
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
