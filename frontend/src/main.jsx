// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider
import { SnackbarProvider } from 'notistack'; // Import SnackbarProvider
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1021573370715-r6gebmvpb0cn47eoi3it2dqfor5qjl9v.apps.googleusercontent.com"> {/* Tambahkan GoogleOAuthProvider di sini */}
      <SnackbarProvider
        maxSnack={1} // Maksimal 1 notifikasi ditampilkan bersamaan
        anchorOrigin={{
          vertical: 'top', // Posisi vertikal (top)
          horizontal: 'center', // Posisi horizontal (center)
        }}
        autoHideDuration={3000}
      >
        <AuthProvider>
          <App />
        </AuthProvider>
      </SnackbarProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);