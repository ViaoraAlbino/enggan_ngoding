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
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={1} // Maksimal 3 notifikasi ditampilkan bersamaan
      anchorOrigin={{
        vertical: 'top', // Posisi vertikal (top)
        horizontal: 'center', // Posisi horizontal (right)
      }}
      autoHideDuration={3000}
    >
      <AuthProvider>
        <App />
      </AuthProvider>
    </SnackbarProvider>
  </React.StrictMode>
);