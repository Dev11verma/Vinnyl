import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: if you have a CSS file
import App from './App';  // Import your main App component
import ProtectedRoute from './ProtectedRoute';  // Import ProtectedRoute

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Your main App component */}
  </React.StrictMode>,
  document.getElementById('root')  // Render to the root element in public/index.html
);
