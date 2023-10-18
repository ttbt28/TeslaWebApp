// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { UserProvider } from './UserContext'; // Import the UserProvider


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider> {/* Wrap your app with UserProvider */}
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
